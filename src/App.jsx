import React from "react";
import Hero from "./components/Hero";
import Script from "./components/Script";
import "./App.css";

export const App = () => {
  return (
    <main>
      <div className="main">
        <div className="gradient" />
      </div>
      <div className="app">
        <Hero />
        <Script />
      </div>
    </main>
  );
};

export default App;
