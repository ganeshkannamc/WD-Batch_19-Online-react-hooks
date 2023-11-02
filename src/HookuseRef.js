import React, { useEffect, useId, useRef, useState } from "react";

const HookuseRef = () => {
  let [nameList, setNameList] = useState([]);
  //   let [typeName, setTypeName] = useState("");

  let newId = useId();
  let newId2 = useId();
  useEffect(() => {
    getName.current.value = "";
    // getName.current.value = newId;
    getName.current.focus();
  }, [nameList]);
  let getName = useRef();

  return (
    <div>
      <h1>useRef</h1>
      {/* <input
        type="text"
        value={typeName}
        onChange={(eve) => setTypeName(eve.target.value)}
      /> */}
      <p>{newId}</p>
      <p>{newId2}</p>
      <input id={newId} type="text" ref={getName} />

      {/* <button
        onClick={() => setNameList((preValue) => [...preValue, typeName])}
      >
        Add
      </button> */}

      <button
        onClick={() => {
          setNameList((preValue) => [...preValue, getName.current.value]);
        }}
      >
        Add
      </button>

      {nameList.map((itm, inx) => (
        <h1 key={inx}>{itm}</h1>
      ))}
    </div>
  );
};

export default HookuseRef;
