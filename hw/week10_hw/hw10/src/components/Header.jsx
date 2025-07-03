import React from "react";
import styled from "styled-components";
import logo from "../assets/smwu.png";

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 30vh;
  justify-content: end;
  align-items: center;
`;

const Img = styled.img`
  width: 64px;
  height: 4.5rem;
`;

const Title = styled.h1`
  font-family: "Samliphopangche";
  color: Navy;
  text-align: center;
  font-size: 2.6rem;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Img src={logo} />
      <Title>
        숙명여대 <br></br> 맛집 LIST
      </Title>
    </HeaderContainer>
  );
};

export default Header;
