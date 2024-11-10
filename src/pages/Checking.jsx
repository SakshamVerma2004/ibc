import { useEffect, useState } from "react";
import styles from "../styles/Checking.module.css";

let Checking = () => {
  let [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://ibc-cm-default-rtdb.firebaseio.com/data.json")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if (data) {
          let nestedObjects = Object.values(data);
          setData(nestedObjects);
        }
      });
  }, []);

  if (data.length === 0) {
    return <div>Loading...</div>;
  } 
  let columns = Object.keys(data[0]);

  return (
    <div className={styles.checking}>
      <p><b>{data.length} Visitors</b></p>
      <table>
        <thead>
          <tr>
            {columns.map((column, index) => (
              <th key={index}>{column}</th>
            ))} 
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              {columns.map((column, colIndex) => (
                <td key={colIndex}>{row[column]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Checking;
