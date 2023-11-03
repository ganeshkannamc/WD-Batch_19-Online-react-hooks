import { memo } from "react";

function DemoListOfNames({  names,addName }) {
  console.log("Child comp rendering...");
  return (
    <>
      <h1>Name List</h1>
      {names.map((itm, inx) => (
        <h1 key={inx}>{itm}</h1>
      ))}
      <button onClick={addName}>Add name</button>
    </>
  );
}
export default memo(DemoListOfNames);
