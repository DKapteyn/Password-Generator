import React, { useEffect, useReducer } from "react";
import { strengthActionT, strengthGaugeT, strengthStateT } from "../type";

export default function StrengthGauge({ strengthSetting }: strengthGaugeT) {
  useEffect(() => {
    strengthSetting === 0
      ? dispatch({ type: "tooWeak" })
      : strengthSetting === 1
      ? dispatch({ type: "weak" })
      : strengthSetting === 2
      ? dispatch({ type: "medium" })
      : strengthSetting === 3
      ? dispatch({ type: "strong" })
      : dispatch({ type: "empty" });
  }, [strengthSetting]);

  const emptyBox = {
    //veryDarkGrey
    backgroundColor: `#18171F`,
    //almostWhite
    borderColor: "#E6E5EA",
  };
  const redBox = {
    //red
    backgroundColor: `#F64A4A`,
    //red
    borderColor: "#F64A4A",
  };

  const orangeBox = {
    //orange
    backgroundColor: `#FB7C58`,
    //orange
    borderColor: "#FB7C58",
  };

  const yellowBox = {
    //yellow
    backgroundColor: `#F8CD65`,
    //yellow
    borderColor: "#F8CD65",
  };

  const greenBox = {
    //neonGreen
    backgroundColor: `#A4FFAF`,
    //neonGreen
    borderColor: "#A4FFAF",
  };

  const initialStrengthState = {
    name: "",
    box1: {
      ...emptyBox,
    },
    box2: {
      ...emptyBox,
    },
    box3: {
      ...emptyBox,
    },
    box4: {
      ...emptyBox,
    },
  };
  function reducer(state: strengthStateT, action: strengthActionT) {
    switch (action.type) {
      case "tooWeak":
        return {
          name: "too weak!",
          box1: {
            ...redBox,
          },
          box2: {
            ...emptyBox,
          },
          box3: {
            ...emptyBox,
          },
          box4: {
            ...emptyBox,
          },
        };
      case "weak":
        return {
          name: "weak",
          box1: {
            ...orangeBox,
          },
          box2: {
            ...orangeBox,
          },
          box3: {
            ...emptyBox,
          },
          box4: {
            ...emptyBox,
          },
        };
      case "medium":
        return {
          name: "medium",
          box1: {
            ...yellowBox,
          },
          box2: {
            ...yellowBox,
          },
          box3: {
            ...yellowBox,
          },
          box4: {
            ...emptyBox,
          },
        };
      case "strong":
        return {
          name: "strong",
          box1: {
            ...greenBox,
          },
          box2: {
            ...greenBox,
          },
          box3: {
            ...greenBox,
          },
          box4: {
            ...greenBox,
          },
        };
      case "empty":
        return {
          name: "",
          box1: {
            ...emptyBox,
          },
          box2: {
            ...emptyBox,
          },
          box3: {
            ...emptyBox,
          },
          box4: {
            ...emptyBox,
          },
        };
      default:
        return state;
    }
  }

  const [state, dispatch] = useReducer(reducer, initialStrengthState);

  return (
    <div className=" h-14 sm:h-[72px] mt-8 w-full bg-veryDarkGrey flex justify-between items-center px-8">
      <span className="bodyS sm:body text-grey">STRENGTH</span>
      <div className="flex">
        <span className="mr-4 text-almostWhite uppercase body sm:headingM">
          {state.name}
        </span>
        <div className="flex gap-2">
          <div
            onClick={() => dispatch({ type: "tooWeak" })}
            className="strengthBox cursor-pointer"
            style={{ ...state.box1 }}
          ></div>
          <div
            onClick={() => dispatch({ type: "weak" })}
            className="strengthBox"
            style={{ ...state.box2 }}
          ></div>
          <div
            onClick={() => dispatch({ type: "medium" })}
            className="strengthBox"
            style={{ ...state.box3 }}
          ></div>
          <div
            onClick={() => dispatch({ type: "strong" })}
            className="strengthBox"
            style={{ ...state.box4 }}
          ></div>
        </div>
      </div>
    </div>
  );
}
