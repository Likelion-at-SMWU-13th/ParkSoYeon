import React from "react";
import content4 from "../assets/unni.png";
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
  border-radius: 5px;

  }
`;

const No = styled.h1`
  align-self: flex-end;
  padding-left: 5px;
  padding-right: 17px;
  margin: 0;
  font-size: 75px;
  font-style: Italic;
  font-family: "Jalnan";
`;

const ContentCard4 = () => {
  return (
    <Card>
      <No>4</No>
      <Img src={content4} />
    </Card>
  );
};

export default ContentCard4;
