import React, { useReducer } from "react";
import { strengthActionT, strengthStateT } from "../type";

export default function StrengthGauge() {
  const initialStrengthState = {
    name: "john",
    box1: {
      backgroundColor: `#18171F`,
      borderColor: "#E6E5EA",
    },
    box2: {
      backgroundColor: `#18171F`,
      borderColor: "#E6E5EA",
    },
    box3: {
      backgroundColor: `#18171F`,
      borderColor: "#E6E5EA",
    },
    box4: {
      backgroundColor: `#18171F`,
      borderColor: "#E6E5EA",
    },
  };
  function reducer(state: strengthStateT, action: strengthActionT) {
    switch (action.type) {
      case "tooWeak":
        return {
          name: "",
          box1: {
            backgroundColor: `var(--grey)`,
            borderColor: `var(--almostWhite)`,
          },
          box2: {
            backgroundColor: `var(--grey)`,
            borderColor: `var(--almostWhite)`,
          },
          box3: {
            backgroundColor: `var(--veryDarkGrey)`,
            borderColor: `var(--almostWhite)`,
          },
          box4: {
            backgroundColor: `var(--veryDarkGrey)`,
            borderColor: `var(--almostWhite)`,
          },
        };
      case "Weak":
        return {
          name: "",
          box1: {
            backgroundColor: `var(--veryDarkGrey)`,
            borderColor: `var(--almostWhite)`,
          },
          box2: {
            backgroundColor: `var(--veryDarkGrey)`,
            borderColor: `var(--almostWhite)`,
          },
          box3: {
            backgroundColor: `var(--veryDarkGrey)`,
            borderColor: `var(--almostWhite)`,
          },
          box4: {
            backgroundColor: `var(--veryDarkGrey)`,
            borderColor: `var(--almostWhite)`,
          },
        };
      default:
        return state;
    }
  }

  const [state, dispatch] = useReducer(reducer, initialStrengthState);

  return (
    <div className=" h-14 w-[311px] bg-veryDarkGrey flex justify-between items-center">
      <span className="bodyS sm:body grey">STRENGTH</span>
      <div className="flex">
        <span>{state.name}</span>
        <div className="flex gap-2">
          <div
            onClick={() => dispatch({ type: "tooWeak" })}
            className="strengthBox cursor-pointer"
            style={{ ...state.box1 }}
          ></div>
          <div className="strengthBox" style={{ ...state.box2 }}></div>
          <div className="strengthBox" style={{ ...state.box3 }}></div>
          <div className="strengthBox" style={{ ...state.box4 }}></div>
        </div>
      </div>
    </div>
  );
}
