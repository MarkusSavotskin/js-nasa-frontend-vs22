import React, { useEffect, useState } from "react";
import { callSatellites } from "../../utils";
import './List.css';

const List = (props) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    callSatellites()
      .then(setData)
      .catch(console.error);
  }, []);

  return (
    <ul>
      {data.map((item) => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );
};

export default List;
