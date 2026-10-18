import { useState } from "react";
import { useEffect } from "react";

const App = () => {
  function random() {
    const a = Math.random();
    console.log(a);
  }

  const [data, setdata] = useState(0);
  const [data1, setdata1] = useState(100);

  useEffect(function hello() {
    console.log("Hello, world!");
  });
  useEffect(
    function () {
      console.log("Hello form rafay, world!");
    },
    [data1],
  );
  return (
    <div>
      <h1>Num : {data}</h1>
      <h1>Num1 : {data1}</h1>
      <button
        onMouseEnter={() => {
          setdata(data + 1);
        }}
        onMouseLeave={() => {
          setdata1(data1 + 10);
        }}
      >
        Data
      </button>
      <button onClick={random}>Random</button>
    </div>
  );
};

export default App;
