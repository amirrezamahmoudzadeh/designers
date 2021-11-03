import React from "react";
import styled from "styled-components";

import Fast from "../assets/images/undraw_web_devices_re_m8sc (1).svg";

const Container = styled.div`
  display: flex;
  height: 100vh;
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

const Image = styled.img`
  width: 100%;
`;

const Left = styled.div`
  width: 50%;
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h3`
  font-size: 50px;
  margin-bottom: 10rem;
`;

const Desc = styled.p`
  font-size: 20px;
  width: 90%;
  line-height: 2rem;
  text-align: center;
`;

function Feature() {
  return (
    <Container>
      <Right>
        <Image src={Fast} alt="Responsive" />;
      </Right>
      <Left>
        <Title>طراحی سایت ریسپانسیو</Title>
        <Desc>
          طراحی وب سایت ریسپانسیو از ویژگیهای منحصربفرد پروژه‌های طراحی وب تیم
          طراحی و توسعه می‌باشد. با توجه به گسترش روزافزون موبایل و افزایش
          بازدید کاربران وبسایت‌ها از طریق تلفن‌های همراه و تبلت، تمامی
          پروژه‌های طراحی وبسایت به شکل طراحی سایت ریسپانسیو (Responsive Web
          Design) پیاده سازی و اجرا می‌شود. در طراحی سایت واکنشگرا، نمایش وبسایت
          طراحی شده در همه دستگاه‌های کامپیوتری از جمله دسکتاپ٬ موبایل و تبلت
          متناسب با دستگاه بازدید کننده تغییر کرده و سایز و چینش صفحات وب سایت
          به شکل صحیح نمایش داده می شود. در طراحی سایت ریسپانسیو نیازی به اسکرول
          افقی صفحات وب وجود ندارد و به این شکل استاندارد و کاربر پسند، دسترسی
          آسان توسط دستگاه‌های مختلف همواره رعایت می‌شود. علاوه بر این مزیت دیگر
          آن دسترسی آسان کاربران شبکه‌های اجتماعی به سایت شما بوده که موجب
          موفقیت استراتژی های بازاریابی آنلاین سایت‌ها می شود.
        </Desc>
      </Left>
    </Container>
  );
}

export default Feature;
