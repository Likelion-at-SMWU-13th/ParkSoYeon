import React from "react";
import styled from "styled-components";
import ContentCard1 from "./ContentCard1";
import ContentCard2 from "./ContentCard2";
import ContentCard3 from "./ContentCard3";
import ContentCard4 from "./ContentCard4";
import ContentCard5 from "./ContentCard5";
import ContentCard6 from "./ContentCard6";
import arrow from "../assets/arrow.svg";

const Container = styled.div`
  height: 26.5rem;
`;

const Text = styled.p`
  padding: 0.8rem 2.7rem;
  margin: 0px;
  font-size: 23px;
  font-family: "Pretendard-Bold";
  color: white;
`;

const Arrow = styled.img`
  width: 20px;
  position: absolute;
  top: 159px;
  right: 30px;
  opacity: 0;
  transition: opacity 0.3s ease;
  cursor: pointer;
`;

const Card = styled.div`
  padding-left: 2.6rem;
  padding-top: 0.3rem;
  display: flex;
  align-items: center;
  align-self: center;
  color: white;
  position: relative;

  &:hover ${Arrow} {
    opacity: 1;
  }
`;

const Main = () => {
  const cardCount = 6;
  return (
    <Container>
      <Text>오늘의 티빙 TOP 20</Text>
      <Card>
        <ContentCard1 />
        <ContentCard2 />
        <ContentCard3 />
        <ContentCard4 />
        <ContentCard5 />
        <ContentCard6 />
        {cardCount >= 6 && <Arrow src={arrow} />}
      </Card>
    </Container>
  );
};

export default Main;
