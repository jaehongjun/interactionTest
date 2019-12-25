import React, { useRef, useState, useCallback } from "react";
import "./App.css";
import { throttle } from "throttle-debounce";
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
  const [position, setPosition] = useState();
  useEffect(() => {
    console.log(current);
  }, [current]);
  const onWheel = e => {
    if (e.deltaY < 0) {
      setState(state + 1);
      console.log(`up! ${state}`);
    } // up
    else if (e.deltaY > 0) {
      setState(state - 1);
      console.log(`down! ${state}`);
    } // down
  };

  useEffect(() => {
    if (totalRef) {
      const { children } = totalRef.current;

      const componentsSpace = Array.from(children).map(space => {
        return space.offsetTop;
      });
      setCurrent(componentsSpace);
    }
  }, [totalRef]);
  const onScroll = useCallback(() => {
    setPosition(window.scrollY);
  }, []);

  const findIndex = ({ array = [], position }) => {
    const condition = Array.from(array).filter((item, index) => {
      return item < position;
    });

    return condition.length;
  };

  const [activeCurrent, setActiveCurrent] = useState();
  useEffect(() => {
    console.log(position);
    if (current) {
      const index = findIndex.call(this, { array: current, position });
      setActiveCurrent(index);
    }
    // return () => {
    //   cleanup
    // };
  }, [position]);
  // useEffect(() => {
  //   window.addEventListener("wheel", throttle(1000, onWheel.bind(this)));
  //   return () => {
  //     window.removeEventListener("wheel", throttle(1000, onWheel.bind(this)));
  //   };
  // }, [onWheel, state]);
  useEffect(() => {
    window.addEventListener(
      "scroll",
      throttle(300, () => onScroll())
    );
    return () => {
      window.removeEventListener(
        "scroll",
        throttle(300, () => onScroll())
      );
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
          <Lottie
            option={options.option}
            key={index}
            index={index}
            activeCurrent={activeCurrent}
          ></Lottie>
        ))}
      </div>
    </div>
  );
}

export default App;
