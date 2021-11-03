import React from "react";
import styled from "styled-components";

import Seo from '../assets/images/undraw_dashboard_re_3b76.svg'

const Container = styled.div`
  display: flex;
  height: 100vh;
  overflow: hidden;
  box-sizing: border-box;
  @media only screen and (max-width: 480px) {
    flex-flow: column wrap;
  }
`;

const Right = styled.div`
  width: 50%;
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  justify-content: center;
  @media only screen and (max-width : 480px){
    width: 100%;
    height: 100%;
  }
`;

const Title = styled.h3`
  font-size: 50px;
  text-align: center;
  margin-bottom: 10rem;
  @media only screen and (max-width : 480px){
    width: 100%;
    font-size: 30px;
  }
`;

const Desc = styled.p`
  font-size: 20px;
  width: 90%;
  line-height: 2rem;
  text-align: center;
  @media only screen and (max-width : 480px){
    font-size: 15px;
  }
`;

const Left = styled.div`
  width: 50%;
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

function Service() {
  return (
    <Container>
      <Right>
        <Title>سئو و بهینه سازی سایت</Title>
        <Desc>
          اگر شما به دنبال برندینگ و افزایش بازدید و فروش وب سایت خود با کمترین
          هزینه و بازدهی بالا هستید، کمک گرفتن از متخصصین سئو و بهینه سازی سایت،
          بهترین راهکار جهت افزایش رتبه سایت در موتورهای جستجو است. علاوه بر
          رعایت اصول اولیه سئو در کلیه پروژه های شرکت طراحی سایت وب‌رمز٬ با
          دریافت مشاوره رایگان میتوانید بهینه سازی و سئو وب سایت خود را نیز به
          وب رمز بسپارید.
        </Desc>
      </Right>
      <Left>
      <Image src={Seo} alt="Seo" />;
      </Left>
    </Container>
  );
}

export default Service;
