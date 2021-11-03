import React from "react";
import styled from "styled-components";

const Container = styled.div`
  /* background-color: aqua; */
`;
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
`;

const Left = styled.div`
  width: 60%;
  display: flex;
  justify-content: space-between;
`;

const Logo = styled.h1`
  font-weight: bold;
  font-family: IranNastaliq;
  font-size: 2rem;
`;

const Menu = styled.ul`
  display: flex;
  align-items: center;
`;
const MenuItem = styled.li`
  margin-left: 30px;
  font-style: 20px;
  list-style: none;
  cursor: pointer;
  font-weight: bold;
  transition: all ease-in-out 0.3s;
  &:hover{
    color: #12b1e5 ;
  }
`;
const Button = styled.button`
  border: none;
  outline: none;
  font-family: Vazir;
  cursor: pointer;
  border-radius: 5px;
  padding: 10px 15px;
  background-color: #12b1e5;
  transition: all ease-in-out 0.3s;
  &:hover {
    background-color: #12b0e5a2;
  }
`;

function Navbar() {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Logo>طراحان وب</Logo>
          <Menu>
            <MenuItem>خانه</MenuItem>
            <MenuItem>خدمات</MenuItem>
            <MenuItem>نمونه کارها</MenuItem>
            <MenuItem>درباره ما </MenuItem>
            <MenuItem>تماس با ما</MenuItem>
          </Menu>
        </Left>
        <Button>تماس با ما : 0843333333</Button>
      </Wrapper>
    </Container>
  );
}

export default Navbar;
