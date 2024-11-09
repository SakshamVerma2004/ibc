import React, { useEffect, useRef, useState } from 'react';

// Helper functions from the original code (you can copy these from the original JS)
const pi = Math.PI;
const pi2 = 2 * Math.PI;

const rnd = (a, b) => (arguments.length === 1 ? Math.random() * a : a + Math.random() * (b - a));
const rnd_sign = () => (Math.random() > 0.5 ? 1 : -1);
const dtr = (deg) => deg * pi / 180;
const rtd = (rad) => rad * 180 / pi;
const each = (items, callback) => items.forEach((item, index) => callback(item, index));
const extend = (options, defaults) => {
  for (let key in options) {
    if (defaults.hasOwnProperty(key)) defaults[key] = options[key];
  }
  return defaults;
};

function Waves({ holderId, options }) {
  const canvasRef = useRef(null);
  const [waves, setWaves] = useState([]);
  const [hue, setHue] = useState(options.hue[0]);
  const [hueFw, setHueFw] = useState(true);
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const [centerX, setCenterX] = useState(0);
  const [centerY, setCenterY] = useState(0);
  const [radius, setRadius] = useState(0);
  const [color, setColor] = useState('rgba(0,0,0,0.1)');

  const resize = () => {
    const holder = document.querySelector(holderId);
    const canvas = canvasRef.current;
    const scale = window.devicePixelRatio || 1;
    const width = holder.offsetWidth * scale;
    const height = holder.offsetHeight * scale;

    setWidth(width);
    setHeight(height);
    setCenterX(width / 2);
    setCenterY(height / 2);
    setRadius(Math.sqrt(Math.pow(width, 2) + Math.pow(height, 2)) / 2);

    canvas.width = width;
    canvas.height = height;
    canvas.style.width = `${width / scale}px`;
    canvas.style.height = `${height / scale}px`;
  };

  const updateColor = () => {
    let newHue = hue + (hueFw ? 0.01 : -0.01);
    if (newHue > options.hue[1] && hueFw) {
      newHue = options.hue[1];
      setHueFw(false);
    } else if (newHue < options.hue[0] && !hueFw) {
      newHue = options.hue[0];
      setHueFw(true);
    }

    const a = Math.floor(127 * Math.sin(0.3 * newHue) + 128);
    const b = Math.floor(127 * Math.sin(0.3 * newHue + 2) + 128);
    const c = Math.floor(127 * Math.sin(0.3 * newHue + 4) + 128);

    setColor(`rgba(${a}, ${b}, ${c}, 0.1)`);
    setHue(newHue);
  };

  const animate = (ctx) => {
    updateColor();
    ctx.clearRect(0, 0, width, height);

    if (options.background) {
      const gradient = ctx.createLinearGradient(0, 0, 0, height);
      gradient.addColorStop(0, '#000');
      gradient.addColorStop(1, color);
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);
    }

    waves.forEach((wave) => {
      wave.update();
      wave.draw(ctx, centerX, centerY, radius, options.rotation, options.amplitude, color);
    });
  };

  const startAnimation = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const render = () => {
      animate(ctx);
      requestAnimationFrame(render);
    };
    render();
  };

  useEffect(() => {
    resize();
    const initialWaves = [];
    for (let i = 0; i < options.waves; i++) {
      initialWaves.push(new Wave({ options }));
    }
    setWaves(initialWaves);

    if (options.resize) {
      window.addEventListener('resize', resize);
    }

    return () => {
      window.removeEventListener('resize', resize);
    };
  }, [options]);

  useEffect(() => {
    startAnimation();
  }, [waves]);

  return (
    <div id={holderId}>
      <canvas ref={canvasRef}></canvas>
    </div>
  );
}

function Wave({ options }) {
  const speed = options.speed;
  const angle = [rnd(pi2), rnd(pi2), rnd(pi2), rnd(pi2)];
  const waveSpeed = [
    rnd(speed[0], speed[1]) * rnd_sign(),
    rnd(speed[0], speed[1]) * rnd_sign(),
    rnd(speed[0], speed[1]) * rnd_sign(),
    rnd(speed[0], speed[1]) * rnd_sign(),
  ];

  const lines = [];

  const update = () => {
    lines.push(new Line(angle, waveSpeed));
    if (lines.length > options.width) {
      lines.shift();
    }
  };

  const draw = (ctx, x, y, radius, rotation, amplitude, color) => {
    lines.forEach((line) => {
      const angle = line.angle;

      const x1 = x - radius * Math.cos(angle[0] * amplitude + rotation);
      const y1 = y - radius * Math.sin(angle[0] * amplitude + rotation);
      const x2 = x + radius * Math.cos(angle[3] * amplitude + rotation);
      const y2 = y + radius * Math.sin(angle[3] * amplitude + rotation);
      const cpx1 = x - radius / 3 * Math.cos(angle[1] * amplitude * 2);
      const cpy1 = y - radius / 3 * Math.sin(angle[1] * amplitude * 2);
      const cpx2 = x + radius / 3 * Math.cos(angle[2] * amplitude * 2);
      const cpy2 = y + radius / 3 * Math.sin(angle[2] * amplitude * 2);

      ctx.strokeStyle = color;
      ctx.beginPath();
      ctx.moveTo(x1, y1);
      ctx.bezierCurveTo(cpx1, cpy1, cpx2, cpy2, x2, y2);
      ctx.stroke();
    });
  };

  return { update, draw };
}

function Line(angle, speed) {
  this.angle = [
    Math.sin(angle[0] += speed[0]),
    Math.sin(angle[1] += speed[1]),
    Math.sin(angle[2] += speed[2]),
    Math.sin(angle[3] += speed[3]),
  ];
  this.color = 'rgba(0,0,0,0.1)';
}

export default Waves;
