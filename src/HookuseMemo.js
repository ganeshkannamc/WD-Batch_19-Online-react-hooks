import React, { useMemo, useState } from "react";

const HookuseMemo = () => {
  let [incre, setIncre] = useState(0);
  let [decre, setDecre] = useState(0);
  let expensiveFunOut = useMemo(() => expensiveFunction(4), [decre]);
  // let expensiveFunOut = expensiveFunction(decre);
  console.log("inside js");
  return (
    <div>
      <h1>useMemo</h1>
      <h1>expensiveFunOut - {expensiveFunOut}</h1>
      <button onClick={() => setIncre(incre++)}>Incre - {incre}</button>
      <button onClick={() => setDecre(0)}>Decre - {decre}</button>
    </div>
  );
};

function expensiveFunction(num) {
  console.log("Running expensiveFunction");
  for (let i = 0; i < 100000000; i++) {
    num += 1;
  }
  return num;
}

export default HookuseMemo;
