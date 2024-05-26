import React from "react";
import { nutshell } from "../assets";

const Hero = () => {
  return (
    <header className="w-full flex justify-center item-center flex-col">
      <nav className="flex justify-between items-center w-full mb-10 pt-3">
        <img
          src={nutshell}
          alt="nutshell_logo"
          className="size object-contain"
        />
        <button
          type="button"
          onClick={() => window.open("https://github.com/rayikume/nutshell")}
          className="black_btn font-satoshi font-bold"
        >
          Github
        </button>
      </nav>
      <h1 className="head_text font-satoshi">
        Summerize Articales with <br className="max-md:hidden" />
        <span className="orange_gradient">OpenAI GPT-4</span>
      </h1>
      <h2 className="desc font-satoshi">
        Quickly get accurate article summaries by typing any URL. Powered by{" "}
        <br className="max-md:hidden" />
        ChatGPT-4, it delivers concise summaries in seconds!
      </h2>
    </header>
  );
};

export default Hero;
