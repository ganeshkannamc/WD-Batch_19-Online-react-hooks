import { useEffect } from "react";
import HookuseCallback from "./HookuseCallback";
import HookuseLayoutEffect from "./HookuseLayoutEffect";
import HookuseMemo from "./HookuseMemo";
import HookuseReducer from "./HookuseReducer";
import HookuseRef from "./HookuseRef";
import useScreenSize from "./useScreenSize";

function App() {
  let [screenSize1, getName1, name1] = useScreenSize();
  let [screenSize2, getName2, name2] = useScreenSize();

  useEffect(() => {
    getName1("kanna");
    getName2("Ganesh");
  });

  return (
    <div className="App">
      <h1>React Hooks</h1>
      <h1>React Hooks - {name1}</h1>
      <h1>React Hooks - {name2}</h1>
      <h1>
        The screen size is - Width - {screenSize1.width}, height{" "}
        {screenSize1.height}
      </h1>

      {
        parseInt(screenSize1.width) < 800 ? <h1>you are in mobile</h1> : <h1>Not mobile</h1>
      }
      {/* useLayoutEffect */}
      {/* <HookuseLayoutEffect /> */}
      {/* useRef, useId */}
      {/* <HookuseRef /> */}
      {/* useReducer */}
      {/* <HookuseReducer /> */}
      {/* useMemo */}
      {/* <HookuseMemo /> */}
      {/* useCallback */}
      {/* <HookuseCallback /> */}
    </div>
  );
}

export default App;
