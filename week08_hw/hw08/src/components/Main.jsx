import React from "react";
import styled from "styled-components";
import ContentCard1 from "./ContentCard1";
import ContentCard2 from "./ContentCard2";
import ContentCard3 from "./ContentCard3";
import ContentCard4 from "./ContentCard4";
import ContentCard5 from "./ContentCard5";
import ContentCard6 from "./ContentCard6";

const Container = styled.div`
  height: 27rem;
  margin-bottom: 5px;
`;

const Card = styled.div`
  padding-left: 2.4rem;
  padding-top: 0.3rem;
  display: flex;
  align-items: center;
  align-self: center;
  color: white;
`;

const Text = styled.p`
  padding: 0.8rem 2.5rem;
  margin: 0px;
  font-size: 23px;
  font-family: "Pretendard-Bold";
  color: white;
`;
const Main = () => {
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
      </Card>
    </Container>
  );
};

export default Main;
