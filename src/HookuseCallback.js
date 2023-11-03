import React, { useCallback, useState } from "react";
import DemoListOfNames from "./DemoListOfNames";

const HookuseCallback = () => {
  let [names, setName] = useState(["Ganesh", "Kanna"]);
  let [count, setCount] = useState(0);

  //   let names = ["ganesh", "kanna"];

//   function addName() {
//     setName((preVal) => [...preVal, "New name added"]);
//   }

    let addName = useCallback(() => {
      setName((preVal) => [...preVal, "New name added"]);
    }, [names]);

  return (
    <div>
      <h1>useCallback</h1>
      {/* <DemoListOfNames addName={addName} names={names} /> */}
      <DemoListOfNames names={names} addName={addName} />
      {/* <button onClick={addName}>test</button> */}
      <button onClick={() => setCount(count++)}>{count}</button>
    </div>
  );
};

export default HookuseCallback;
