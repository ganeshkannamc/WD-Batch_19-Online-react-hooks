import { useState, useEffect } from "react";

function useScreenSize() {
  let [screenSize, setScreenSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  let [name, setName] = useState('')
  
  function getName(abd){
    setName(abd + ' the name')
  }
  
  

  useEffect(() => {
    let handleResize = () => {
      setScreenSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return [screenSize,getName,name];
}


export default useScreenSize;