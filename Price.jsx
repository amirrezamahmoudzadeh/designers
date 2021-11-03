import React from "react";
import styled from "styled-components";
import PriceCard from "./PriceCard";


const secondPlane = {
  price: "9 میلیون",
  name: "پکیج عادی",
  speed: "4",
  item: "بدون مشاوره کسب و کار آنلاین",
  finish: "10 روز",
  support: "6 ماه",
};
const thirdPlane = {
  price: "19 میلیون",
  name: "پکیج حرفه ای",
  speed: "5",
  item: "بدون مشاوره کسب و کار آنلاین",
  finish: "20 روز",
  support: "12 ماه",
};

const Container = styled.div`
  display: flex;
  height: 100vh;
  justify-content: space-evenly;
  align-items: center;
  box-sizing: border-box;
  @media only screen and (max-width: 480px) {
    flex-flow: column wrap;
    height: auto;
    margin-top: 1rem;
  }
`;

function Price() {

  return (
    <Container>
      <PriceCard
        price={secondPlane.price}
        name={secondPlane.name}
        speed={secondPlane.speed}
        item={secondPlane.item}
        finish={secondPlane.finish}
        support={secondPlane.support}
      />
      <PriceCard
        price={thirdPlane.price}
        name={thirdPlane.name}
        speed={thirdPlane.speed}
        item={thirdPlane.item}
        finish={thirdPlane.finish}
        support={thirdPlane.support}
      />
    </Container>
  );
}

export default Price;
