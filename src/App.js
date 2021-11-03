import styled, { css } from "styled-components";
import Feature from "./components/Feature";
import Footer from "./components/Footer";
import Intro from "./components/Intro";
import Navbar from "./components/Navbar";
import Price from "./components/Price";
import Service from "./components/Service";

const Container = styled.div`
  height: 100vh;
  overflow: hidden;
  position: relative;
  direction: rtl;
`;
const FooterContainer = styled.div`
  height: 40vh;
  overflow: hidden;
  position: relative;
  direction: rtl;
`;

const Shape = css`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -2;
`;

const IntroShape = styled.div`
  background-color: #fe9690;
  clip-path: polygon(0 0, 30% 0, 55% 100%, 0% 100%);
  ${Shape}
`;

const FeatureShape = styled.div`
  background-color: #FFE5C7;
  clip-path: polygon(55% 0, 100% 0, 100% 100%, 30% 100%);
  ${Shape}
`;
const ServiceShape = styled.div`
  background-color: #fcc752;
  clip-path: polygon(0 0, 30% 0, 30% 100%, 0 100%);
  ${Shape}
`;
const PriceShape = styled.div`
  background-color: #fe9690;
  clip-path: polygon(30% 0%, 100% 0, 100% 100%, 50% 100%);
  ${Shape}
`;
const FooterShape = styled.div`
  background-color: #fe9690;
  clip-path: polygon(50% 0%, 100% 0, 100% 100%, 58% 100%);
  ${Shape}
`;

function App() {
  return (
    <>
      <Container>
        <Navbar></Navbar>
        <Intro></Intro>
        <IntroShape></IntroShape>
        <Feature></Feature>
      </Container>
      <Container>
        <Feature></Feature>
        <FeatureShape></FeatureShape>
      </Container>
      <Container>
        <Service></Service>
        <ServiceShape></ServiceShape>
      </Container>
      <Container>
        <Price></Price>
        <PriceShape></PriceShape>
      </Container>
      <FooterContainer>
        <Footer></Footer>
        <FooterShape></FooterShape>
      </FooterContainer>
    </>
  );
}

export default App;
