import React from "react";
import ContentWatched1 from "./ContentWatched1";
import ContentWatched2 from "./ContentWatched2";
import styled from "styled-components";

const Container = styled.div`
  height: 25.2rem;
`;

const Text = styled.p`
  padding: 0.7rem 2.7rem;
  margin: 0px;
  font-size: 23px;
  font-family: "Pretendard-Bold";
  color: white;
`;

const Card = styled.div`
  padding-left: 2.6rem;
  padding-top: 0.3rem;
  display: flex;
  align-items: center;
  align-self: center;
  color: white;
`;

const Footer = () => {
  const name = "🦁숙멋사";

  return (
    <Container>
      <Text>{name}님이 시청하는 콘텐츠</Text>
      <Card>
        <ContentWatched1 />
        <ContentWatched2 />
      </Card>
    </Container>
  );
};

export default Footer;
