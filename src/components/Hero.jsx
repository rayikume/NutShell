import React from "react";
import { logo } from "../assets";

const Hero = () => {
  return (
    <header className="w-full flex justify-center item-center flex-col">
      <nav className="flex justify-between items-center flex-full mb-10 pt-3">
        <img src={logo} alt="nutshell_logo" className="w-28 object-contain" />
        <button
          type="button"
          onClick={() => window.open("https://github.com/rayikume/nutshell")}
          className="black_btn"
        >
          Github
        </button>
      </nav>
      <h1 className="head_text">
        Summerize Articales with <br className="max-md:hidden" />
        <span className="orange_gradient">OpenAI GPT-4</span>
      </h1>
      <h2 className="desc">Simplify your reading with nutshell!</h2>
    </header>
  );
};

export default Hero;
