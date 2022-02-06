import React from "react";
import styled from "styled-components";
import designer from "../assets/images/undraw_designer_life_re_6ywf.svg";
import AnimatedShapes from "./AnimatedShapes";

const Container = styled.div`
  height: calc(100vh - 65px);
  box-sizing: border-box;
  display: flex;
  padding: 20px;
  overflow: hidden;
  @media only screen and (max-width: 480px) {
    flex-flow: column wrap;
  }
`;

const Right = styled.div`
  width: 60%;
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  justify-content: center;
  @media only screen and (max-width : 480px){
    width: 100%;
    height: 100%;
  }
`;
const Title = styled.h1`
  font-size: 60px;
  line-height: 1.2em;
  width: 80%;
  text-align: center;
  @media only screen and (max-width : 480px){
    width: 100%;
    font-size: 40px;
  }
`;
const Desc = styled.p`
  font-size: 20px;
  line-height: 1.2em;
  width: 80%;
  text-align: right;
  margin: 40px 0;
`;
const Button = styled.button`
  padding: 15px 40px;
  background-color: #12b1e5;
  border-radius: 10px;
  font-weight: bold;
  border: none;
  transition: all ease-in-out 0.3s;
  &:hover {
    background-color: transparent;
    color: #12b1e5;
  }
`;

const Left = styled.div`
  width: 40%;
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  justify-content: center;
  @media only screen and (max-width: 480px) {
    display: none;
  }
`;

const Image = styled.img`
  width: 100%;
`;

function Intro() {
  return (
    <Container>
      <Right>
        <Title>کسب‌وکارت رو آنلاین کن و 22 ساعته بفروش</Title>
        <Desc>
          نیازها و انتظارات خود را بیان کنید ، ما متناسب با بودجه شما و امکانات
          مورد نیازتان ، وب سایت اختصاصی شما را حرفه ای ، منحصر بفرد و خلاقانه
          طراحی خواهیم نمود.
        </Desc>
        <Button>شروع کنید</Button>
      </Right>
      <Left>
        <Image src={designer} alt="designer" />
      </Left>
      <AnimatedShapes></AnimatedShapes>
    </Container>
  );
}

export default Intro;
