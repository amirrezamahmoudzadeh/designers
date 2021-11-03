import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  height: 40vh;
  overflow: hidden;
  box-sizing: border-box;
`;

const Right = styled.div`
  width: 50%;
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  justify-content: center;
`;
const Title = styled.h3`
  font-size: 30px;
  font-weight: bold;
  margin-top: 0;
`;
const Desc = styled.p`
  width: 70%;
  margin: 4rem auto;
  line-height: 1.2rem;
`;

const Left = styled.div`
  width: 50%;
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  justify-content: center;
`;

const List = styled.ul`
  display: flex;
  margin: 2rem auto;
  flex-flow: column wrap;
  align-items: center;
  justify-content: center;
`;

const ListItem = styled.li`
  list-style: none;
  margin-top: 0.5rem;
  cursor: pointer;
  font-weight: bold;
  transition: all ease-in-out 0.3s;
  &:hover {
    color: #12b1e5;
  }
`;

function Footer() {
  return (
    <Container>
      <Right>
        <Title>آژانس دیجیتال مارکتینگ طراحان وب</Title>
        <Desc>
          طراحان وب با بیش از 9 سال سابقه یکی از موفق ترین شرکت های فعال در
          زمینه طراحی سایت و سئو و طراحی اپلیکیشن در ایران است. این افتخار حاصل
          تلاش تیمی خلاق و متعهد و اعتماد مشتریان است. ما منظم هستیم ، ما خلاق
          هستیم ، ما سرسخت هستیم!
        </Desc>
      </Right>
      <Left>
        <Title>لینک های کمکی</Title>
        <List>
          <ListItem>خانه</ListItem>
          <ListItem>خدمات ما</ListItem>
          <ListItem>نمونه کارها</ListItem>
          <ListItem>بلاگ</ListItem>
          <ListItem>درباره ما</ListItem>
          <ListItem>تماس با ما</ListItem>
        </List>
      </Left>
    </Container>
  );
}

export default Footer;
