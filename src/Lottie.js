import React, { useRef, useEffect, useState } from "react";
import styled from "styled-components";
import lottie from "lottie-web";

const LottieDiv = styled.section`
  height: 800px;
`;

const Lottie = ({ option }) => {
  const ref = useRef(null);
  const [result, setResult] = useState();
  useEffect(() => {
    const resultNext = lottie.loadAnimation({
      ...option,
      container: ref.current
    });
    setResult(resultNext);
    // console.log(resultNext, ref, { ...option, container: ref.current });
    // lottie.play();
    // resultNext.play();
  }, []);
  useEffect(() => {
    if (result) result.play();
    lottie.play();
  }, [result]);
  return (
    <section name="a" className="fdsf">
      <LottieDiv ref={ref}></LottieDiv>
    </section>
  );
};

export default Lottie;
