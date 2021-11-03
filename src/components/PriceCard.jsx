import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  width: 20%;
  flex-flow: column wrap;
  justify-content: space-around;
  align-items: center;
  box-sizing: border-box;
  border-radius: 5px;
  box-shadow: 0 0 25px 5px rgba(0, 0, 0, 0.5);
  background-color: #e7e7e7;
  transition: all ease-in-out 0.3s;
  &:hover{
    transform: scale(1.1);
  }
  @media only screen and (max-width: 480px) {
    width: 80%;
    margin-bottom: 2rem;
  }
`;
const PriceContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 2rem 0;
  @media only screen and (max-width : 480px){
    margin:2px 0;
  }
`;
const ItemPrice = styled.span`
  font-weight: bold;
  font-size: 50px;
  @media only screen and (max-width : 480px){
    font-size: 30px;
  }
`;
const Type = styled.div`
  padding: 10px;
  width: 80%;
  text-align: center;
  align-self: center;
  margin: 10px auto;
  border: 1.5px solid black;
  align-self: stretch;
  text-align: center;
  border-radius: 20px;
  @media only screen and (max-width : 480px){
    margin: 0 auto;
  }
`;
const List = styled.ul`
  display: flex;
  flex-flow: column wrap;
  list-style: none;
`;
const ListItem = styled.li`
  margin: 30px 0;
  text-align: center;
  font-family: Vazir;
  @media only screen and (max-width : 480px){
    margin: 8px 0;
  }
`;
const Button = styled.button`
  align-items: stretch;
  width: 100%;
  padding: 1rem 0;
  font-weight: bold;
  font-size: 1.5rem;
  border: none;
`;

function PriceCard(props) {
  return (
    <Container>
      <PriceContainer>
        <ItemPrice>{props.price}</ItemPrice>
      </PriceContainer>
      <Type>{props.name}</Type>
      <List>
        <ListItem>سرعت : {props.speed} از 5</ListItem>
        <ListItem>{props.item}</ListItem>
        <ListItem>زمان تحویل : {props.finish}</ListItem>
        <ListItem>پشتیبانی : {props.support}</ListItem>
      </List>
      <Button>سفارش</Button>
    </Container>
  );
}

export default PriceCard;
