import type { NextPage } from "next";
import Head from "next/head";
import Button from "../Components/Button";
import Checkboxes from "../Components/Checkboxes";
import PasswordInput from "../Components/PasswordInput";
import Slider from "../Components/Slider";
import StrengthGauge from "../Components/StrengthGauge";
import { passwordStrength } from "check-password-strength";
import { useEffect, useState } from "react";

const Home: NextPage = () => {
  const [textValue, setTextValue] = useState("");
  const [charNum, setCharNum] = useState(0);
  const [upperCase, setUpperCase] = useState(false);
  const [lowerCase, setLowerCase] = useState(false);
  const [numbers, setNumbers] = useState(false);
  const [symbols, setSymbols] = useState(false);
  const [strengthSetting, setStrengthSetting] = useState(9);

  useEffect(() => {
    const strengthNumber = passwordStrength(textValue, [
      {
        id: 0,
        value: "Too weak",
        minDiversity: 0,
        minLength: 0,
      },
      {
        id: 1,
        value: "Weak",
        minDiversity: 2,
        minLength: 6,
      },
      {
        id: 2,
        value: "Medium",
        minDiversity: 2,
        minLength: 8,
      },
      {
        id: 3,
        value: "Strong",
        minDiversity: 3,
        minLength: 10,
      },
    ]).id;
    textValue.length > 0
      ? lowerCase === false &&
        upperCase === false &&
        numbers === false &&
        symbols === false
        ? setStrengthSetting(10)
        : setStrengthSetting(strengthNumber)
      : setStrengthSetting(10);
  }, [textValue]);

  function GeneratePassword() {
    let regexArr: string[] = [];
    let lowerArr = "abcdefghijklmnopqrstuvwxyz".split("");
    let upperArr = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
    let numberArr = "1234567890".split("");
    let symbolsArr = "!#$%&()*+,-./:;<=>?@[]^_{|}~".split("");

    if (lowerCase === true) {
      regexArr.push(...lowerArr);
    }
    if (upperCase === true) {
      regexArr.push(...upperArr);
    }
    if (numbers === true) {
      regexArr.push(...numberArr);
    }

    if (symbols === true) {
      regexArr.push(...symbolsArr);
    }
    let password = "";
    for (let i = 0; i < charNum; i++) {
      let random = Math.floor(Math.random() * regexArr.length);
      password = password + regexArr[random];
    }
    regexArr.length === 0
      ? setTextValue("No Characters Selected")
      : setTextValue(password);
  }
  console.log(lowerCase);
  return (
    <div
      className=" px-4 bg-veryDarkGrey h-screen w-screen text-white
                     flex flex-col gap-4 items-center justify-center 
                     sm:gap-[31px]"
    >
      <Head>
        <title>Password Generator</title>
        <meta name="description" content="Password Generator" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <h1 className="body sm:headingM text-grey w-fit">Password Generator</h1>
      <PasswordInput textValue={textValue} setTextValue={setTextValue} />
      <div className="mainDiv flex flex-col bg-darkGrey w-full h-[423px] sm:w-[540px] sm:h-[528px] p-4 sm:px-8 ">
        <Slider charNum={charNum} setCharNum={setCharNum} />
        <Checkboxes
          setUpperCase={setUpperCase}
          upperCase={upperCase}
          lowerCase={lowerCase}
          setLowerCase={setLowerCase}
          numbers={numbers}
          setNumbers={setNumbers}
          symbols={symbols}
          setSymbols={setSymbols}
        />
        <StrengthGauge strengthSetting={strengthSetting} />
        <Button generate={() => GeneratePassword()} />
      </div>
    </div>
  );
};

export default Home;
