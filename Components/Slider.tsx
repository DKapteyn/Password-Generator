import React, { useState } from "react";

export default function Slider() {
  const [charNum, setCharNum] = useState(10);

  const [calcWidth, setCalcWidth] = useState({ width: "50%" });

  function setWidth(string: string) {
    const charLength = parseInt(string) * 5;
    setCalcWidth({ width: `${charLength}%` });
  }

  function charChange(e: React.ChangeEvent<HTMLInputElement>) {
    setCharNum(parseInt(e.target.value));
    setWidth(e.target.value);
  }

  return (
    <div className="h-[119px]">
      <div className="flex justify-between">
        <h4 className="bodyS sm:body text-grey">Character Length</h4>
        <span className="headingM text-neonGreen ">{charNum}</span>
      </div>
      <div className="gridWrapper h-2 mt-7">
        <input
          className=" slider z-30  h-2 w-full "
          type="range"
          min="0"
          max="20"
          name="slider"
          value={charNum}
          onChange={charChange}
        />
        <span
          style={calcWidth}
          className={`h-2 bg-neonGreen mb-2 z-20  `}
        ></span>
        <span className="h-2 bg-veryDarkGrey w-full z-10 "></span>
      </div>
    </div>
  );
}
