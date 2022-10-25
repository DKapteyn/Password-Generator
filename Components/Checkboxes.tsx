import React from "react";
import { checkboxesT } from "../type";

export default function Checkboxes({
  setUpperCase,
  upperCase,
  lowerCase,
  setLowerCase,
  numbers,
  setNumbers,
  symbols,
  setSymbols,
}: checkboxesT) {
  return (
    <div className="bodyS sm:body text-grey grid gap-5">
      <div className="flex items-center">
        <input
          onChange={() => setUpperCase(!upperCase)}
          type="checkbox"
          name="uppercase"
          id="uppercase"
        />

        <span>Include Uppercase Letters </span>
      </div>
      <div className="flex items-center">
        <input
          onChange={() => setLowerCase(!lowerCase)}
          type="checkbox"
          name="lowercase"
          id="lowercase"
        />
        <span>Include Lowercase Letters </span>
      </div>
      <div className="flex items-center">
        <input
          onChange={() => setNumbers(!numbers)}
          type="checkbox"
          name="number"
          id="number"
        />
        <span>Include Numbers </span>
      </div>
      <div className="flex items-center">
        <input
          onChange={() => setSymbols(!symbols)}
          type="checkbox"
          name="symbol"
          id="symbol"
        />
        <span>Include Symbols </span>
      </div>
    </div>
  );
}
