import React from "react";
import { buttonT } from "../type";

export default function Button({ generate }: buttonT) {
  return (
    <div
      onClick={generate}
      className="bg-neonGreen w-full h-[65px] mt-8 grid content-center cursor-pointer  "
    >
      <div className="flex justify-center items-center ">
        <span className="mr-6 bodyS sm:body">GENERATE</span>
        <img src="./images/icon-arrow-right.svg" alt="arrow" />
      </div>
    </div>
  );
}
