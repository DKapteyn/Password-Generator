import type { NextPage } from "next";
import Head from "next/head";
import PasswordInput from "../Components/PasswordInput";
import Slider from "../Components/Slider";

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
      <div className="mainDiv grid bg-darkGrey w-[342px] h-[423px] sm:w-[540px] sm:h-[528px] p-4 sm:px-8 ">
        <Slider />
      </div>
    </div>
  );
};

export default Home;
