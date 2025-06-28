import React from "react";
import styled from "styled-components";
import logo from "../assets/smwu.png";

const FooterContainer = styled.div`
  display: flex;
  width: 100%;
  height: 200px;
  justify-content: center;
  align-items: end;
`;

const Img = styled.img`
  width: 80px;
  height: 85px;
  margin: 18px 0px;
`;

const Title = styled.h1`
  font-family: "Samliphopangche";
  color: Navy;
  font-size: 50px;
  padding-left: 10px;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <Img src={logo} />
      <Title>숙명여자대학교 맛집 LIST</Title>
    </FooterContainer>
  );
};

export default Footer;
