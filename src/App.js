import React, { useRef, useState, useCallback } from "react";
import "./App.css";

import Lottie from "./Lottie";
import a from "./lottie/a";
import b from "./lottie/b";
import c from "./lottie/c";
import d from "./lottie/d";
import e from "./lottie/e";
import { useEffect } from "react";
function App() {
  const defaultOptions = [
    {
      option: {
        // container: Lottie, // the dom element that will contain the animation
        renderer: "svg",
        loop: true,
        autoplay: true,
        // path: "data.json" // the path to the animation json
        animationData: a
      }
    },
    {
      option: {
        // container: Lottie, // the dom element that will contain the animation
        renderer: "svg",
        loop: true,
        autoplay: true,
        // path: "data.json" // the path to the animation json
        animationData: b
      }
    },
    {
      option: {
        // container: Lottie, // the dom element that will contain the animation
        renderer: "svg",
        loop: true,
        autoplay: true,
        // path: "data.json" // the path to the animation json
        animationData: c
      }
    },
    {
      option: {
        // container: Lottie, // the dom element that will contain the animation
        renderer: "svg",
        loop: true,
        autoplay: true,
        // path: "data.json" // the path to the animation json
        animationData: d
      }
    },
    {
      option: {
        // container: Lottie, // the dom element that will contain the animation
        renderer: "svg",
        loop: true,
        autoplay: true,
        path: "./lottie/a", // the path to the animation json
        animationData: e
      }
    }
  ];
  const totalRef = useRef(null);
  const [current, setCurrent] = useState([]);
  const [state, setState] = useState(0);

  useEffect(() => {
    console.log(current);
  }, [current]);
  const onWheel = useCallback(
    e => {
      if (e.deltaY < 0) {
        setState(state + 1);
        console.log(`up! ${state}`);
      } // up
      else if (e.deltaY > 0) {
        setState(state - 1);
        console.log(`down! ${state}`);
      } // down
    },
    [state]
  );
  useEffect(() => {
    if (totalRef) {
      const { children } = totalRef.current;

      const componentsSpace = Array.from(children).map(space => {
        return space.offsetTop;
      });
      setCurrent(componentsSpace);
    }
  }, [totalRef]);
  const onScroll = useCallback(e => {
    console.log(window.scrollY);
  }, []);
  useEffect(() => {
    window.addEventListener("wheel", onWheel);
    return () => {
      window.removeEventListener("wheel", onWheel);
    };
  }, [onWheel, state]);
  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [onScroll]);
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <div ref={totalRef}>
        {defaultOptions.map((options, index) => (
          <Lottie option={options.option} key={index}></Lottie>
        ))}
      </div>
    </div>
  );
}

export default App;
