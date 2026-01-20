import React, { useReducer } from "react";
import { toggleReducer } from "../reducers/toggleReducer";

const Toggle = () => {
  const [state, dispatch] = useReducer(toggleReducer, {
    isDark: false,
    fSize: 16,
  });

  return (
    <div
      style={{
        backgroundColor: state.isDark ? "black" : "white",
        color: state.isDark ? "white" : "black",
        padding: "20px",
      }}
    >
      <button onClick={() => dispatch({ type: "TOGGLE" })}>
        Toggle Dark Mode
      </button>
      <h2 style={{ fontSize: `${state.fSize}px` }}>
        Font Size: {state.fSize}px
      </h2>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>
        Increase Font Size
      </button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>
        Decrease Font Size
      </button>
    </div>
  );
};

export default Toggle;
