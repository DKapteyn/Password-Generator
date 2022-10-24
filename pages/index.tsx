import type { NextPage } from "next";
import Head from "next/head";
import Checkboxes from "../Components/Checkboxes";
import PasswordInput from "../Components/PasswordInput";
import Slider from "../Components/Slider";
import StrengthGauge from "../Components/StrengthGauge";

const Home: NextPage = () => {
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
      <PasswordInput />
      <div className="mainDiv flex flex-col bg-darkGrey w-[342px] h-[423px] sm:w-[540px] sm:h-[528px] p-4 sm:px-8 ">
        <Slider />
        <Checkboxes />
        <StrengthGauge />
      </div>
    </div>
  );
};

export default Home;
