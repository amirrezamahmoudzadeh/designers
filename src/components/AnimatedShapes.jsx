import React from "react";
import styled from "styled-components";

const Square = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 3px;
  background-color: #12b1e5;
  opacity: 0.7;
  position: absolute;
  top: 10vh;
  right: 0px;
  z-index: -2;
  animation: square 15s linear alternate infinite ;

  @keyframes square {
      to{
          transform: translate(-65vw , 75vh);
      }
  }
`;

const Circle = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: #fcc752;
  opacity: 0.7;
  position: absolute;
  bottom: 0px;
  left: 50vw;
  z-index: -2;
animation: cricle 15s linear alternate infinite ;

  @keyframes cricle {
      to{
          transform: translate(50vw , -65vh);
      }
  }
`;

const Rect = styled.div`
  width: 70px;
  height: 160px;
  background-color: pink;
  opacity: 0.7;
  position: absolute;
  top: 50vh;
  right: 0;
  z-index: -2;
  animation: rect 15s linear alternate infinite ;

  @keyframes rect {
      to{
          transform: translate(-45vw , -45vh);
      }
  }
`;

function AnimatedShapes() {
  return <>
  <Square></Square>
  <Circle></Circle>
  <Rect></Rect>
  </>
}

export default AnimatedShapes;
