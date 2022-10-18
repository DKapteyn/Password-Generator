import React, { useState } from "react";

export default function Slider() {
  const [charNum, setCharNum] = useState(10);

  function charChange(e: React.ChangeEvent<HTMLInputElement>) {
    setCharNum(parseInt(e.target.value));
  }

  return (
    <div>
      <div className="flex justify-between">
        <h4 className="bodyS sm:body text-grey">Character Length</h4>
        <span className="headingM text-neonGreen ">{charNum}</span>
      </div>
      <input
        type="range"
        min="0"
        max="20"
        name="slider"
        id="slider"
        value={charNum}
        onChange={charChange}
      />
    </div>
  );
}
