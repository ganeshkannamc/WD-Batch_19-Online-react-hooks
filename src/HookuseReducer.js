import { useReducer } from "react";

let userStatus = [
  { userName: "ganesh", active: true },
  { userName: "kanna", active: false },
  { userName: "ram", active: true },
];

function reducerFun(state, action) {
  //   console.log(action);
  let getNewVal = state.map((itm) => {
    if (itm.userName == action.userName) {
      return { ...itm, active: !itm.active };
    }
    return itm;
  });
  console.log("---", getNewVal);
  return getNewVal;
}

const HookuseReducer = () => {
  let [userState, dispatch] = useReducer(reducerFun, userStatus);

  return (
    <div>
      <h1>useReducer</h1>
      {userState.map((itm, inx) => (
        <p>
          {itm.userName}
          <span>
            <input
              id={itm.userName}
              type="checkbox"
              checked={itm.active}
              onChange={(eve) => {
                dispatch({
                  userName: eve.target.id,
                  status: eve.target.checked,
                });
              }}
            />
          </span>
        </p>
      ))}
    </div>
  );
};

export default HookuseReducer;
