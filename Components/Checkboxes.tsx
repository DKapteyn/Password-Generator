import React from "react";

export default function Checkboxes() {
  return (
    <div className="bodyS sm:body text-grey grid gap-5">
      <div className="flex items-center">
        <input type="checkbox" name="uppercase" id="uppercase" />

        <span>Include Uppercase Letters </span>
      </div>
      <div className="flex items-center">
        <input type="checkbox" name="lowercase" id="lowercase" />
        <span>Include Lowercase Letters </span>
      </div>
      <div className="flex items-center">
        <input type="checkbox" name="number" id="number" />
        <span>Include Numbers </span>
      </div>
      <div className="flex items-center">
        <input type="checkbox" name="symbol" id="symbol" />
        <span>Include Symbols </span>
      </div>
    </div>
  );
}
