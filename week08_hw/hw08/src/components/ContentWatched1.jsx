import React from "react";
import content1 from "../assets/earth.png";
import playButton from "../assets/playButton.svg";
import styled from "styled-components";

const Container = styled.div`
  position: relative;
  width: 13.125rem;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 1.25rem;
  cursor: pointer;
  &:hover {
    transform: translateY(-0.625rem);
    transition: 0.3s;
  }
`;

const Img = styled.img`
  width: 100%;
  z-index: 1;
  border-top-left-radius: 0.3125rem;
  border-top-right-radius: 0.3125rem;
  cursor: pointer;
`;

const Button = styled.img`
  width: 4.375rem;
  position: absolute;
  z-index: 2;
  bottom: 9.375rem;
  left: 4.375rem;
`;

const Title = styled.p`
  display: flex;
  align-items: center;
  align-self: center;
  width: 100%;
  height: 3rem;
  background-color: rgb(31, 31, 31);
  color: rgb(147, 147, 147);
  font-family: "Pretendard-Semibold";
  font-size: 1rem;
  margin: 0;
  text-indent: 1rem;
`;

const ContentWatched1 = () => {
  return (
    <Container>
      <Card>
        <Img src={content1} />
        <Button src={playButton} />
        <Title>시즌3 : 3화</Title>
      </Card>
    </Container>
  );
};

export default ContentWatched1;
