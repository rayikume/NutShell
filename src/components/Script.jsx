import React from "react";
import { useState, useEffect } from "react";
import { copy, linkIcon, loader, tick } from "../assets";

const Script = () => {
  return (
    <section className="mt-16 w-full max-w-xl">
      <div className="flex felx-col w-full gap-2">
        <form
          className="relative felx justify-center items-center"
          onSubmit={(e) => {}}
        >
          <img
            src={linkIcon}
            alt="link_icon"
            className="absolute left-0 my-3 ml-3 w-5"
          />
          <input
            type="url"
            placeholder="Enter a url"
            value=""
            onChange={() => {}}
            required
            className="url_input peer"
          ></input>
          <button
            type="submit"
            className="submit_btn peer-focus:border-gray-700 peer-focus:text-gray-700"
          >
            🡆
          </button>
        </form>
      </div>
    </section>
  );
};

export default Script;
