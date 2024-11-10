import React, { useState, useEffect, useRef } from 'react';

const SessionRecording = () => {
  const [isRecording, setIsRecording] = useState(true);
  const [sessionData, setSessionData] = useState([]);
  const [isReplaying, setIsReplaying] = useState(false);

  const mouseMoveRef = useRef([]);
  const clickRef = useRef([]);
  const scrollRef = useRef([]);

  // Helper function to record mouse movements
  const recordMouseMove = (e) => {
    if (isRecording) {
      const timestamp = Date.now();
      mouseMoveRef.current.push({ x: e.clientX, y: e.clientY, timestamp });
    }
  };

  // Helper function to record clicks
  const recordClick = (e) => {
    if (isRecording) {
      const timestamp = Date.now();
      clickRef.current.push({ x: e.clientX, y: e.clientY, timestamp });
    }
  };

  // Helper function to record scrolls
  const recordScroll = (e) => {
    if (isRecording) {
      const timestamp = Date.now();
      scrollRef.current.push({ scrollY: window.scrollY, timestamp });
    }
  };

  // Stop the recording after 20 seconds
  useEffect(() => {
    if (isRecording) {
      const timer = setTimeout(() => {
        setIsRecording(false);
        setSessionData({
          mouseMoves: mouseMoveRef.current,
          clicks: clickRef.current,
          scrolls: scrollRef.current,
        });
      }, 20000); // Stop after 20 seconds

      return () => clearTimeout(timer);
    }
  }, [isRecording]);

  // Add event listeners for tracking mouse, clicks, and scroll
  useEffect(() => {
    window.addEventListener('mousemove', recordMouseMove);
    window.addEventListener('click', recordClick);
    window.addEventListener('scroll', recordScroll);

    return () => {
      window.removeEventListener('mousemove', recordMouseMove);
      window.removeEventListener('click', recordClick);
      window.removeEventListener('scroll', recordScroll);
    };
  }, []);

  // Function to replay session
  const startReplay = () => {
    setIsReplaying(true);
    let currentIndex = 0;
    const allEvents = [
      ...sessionData.mouseMoves.map((move) => ({ type: 'move', ...move })),
      ...sessionData.clicks.map((click) => ({ type: 'click', ...click })),
      ...sessionData.scrolls.map((scroll) => ({ type: 'scroll', ...scroll })),
    ];

    // Replay events at their original timestamps
    const replayTimer = setInterval(() => {
      if (currentIndex < allEvents.length) {
        const event = allEvents[currentIndex];
        if (event.type === 'move') {
          document.body.style.cursor = 'pointer';
          document.body.style.transform = `translate(${event.x}px, ${event.y}px)`;
        } else if (event.type === 'click') {
          // Simulate a click event (you could show an indicator for clicks if you want)
          console.log('Click:', event);
        } else if (event.type === 'scroll') {
          window.scrollTo(0, event.scrollY);
        }
        currentIndex += 1;
      } else {
        clearInterval(replayTimer);
        setIsReplaying(false);
      }
    }, 100); // Adjust interval to control replay speed
  };

  return (
    <div>
      <h2>{isRecording ? 'Recording Session' : 'Session Recorded'}</h2>
      {isRecording && <p>Recording for 20 seconds...</p>}
      <button onClick={startReplay} disabled={isRecording || !sessionData.mouseMoves.length}>
        Start Replay
      </button>
      {isReplaying && <p>Replaying the session...</p>}
    </div>
  );
};

export default SessionRecording;
