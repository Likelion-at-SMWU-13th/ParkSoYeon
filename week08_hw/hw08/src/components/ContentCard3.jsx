import React from "react";
import content3 from "../assets/geumju.png";
import styled from "styled-components";

const Card = styled.div`
  display: flex;
  flex-direction: row;
  cursor: pointer;
  &:hover {
    transform: translateY(-0.625rem);
    transition: 0.3s;
`;

const Img = styled.img`
  width: 14.7rem;
  border-radius: 0.3125rem;
  }
`;

const No = styled.h1`
  align-self: flex-end;
  padding-left: 0.3125rem;
  padding-right: 1.0625rem;
  margin: 0;
  font-size: 4.6875rem;
  font-style: Italic;
  font-family: "Jalnan";
`;

const ContentCard3 = () => {
  return (
    <Card>
      <No>3</No>
      <Img src={content3} />
    </Card>
  );
};

export default ContentCard3;
