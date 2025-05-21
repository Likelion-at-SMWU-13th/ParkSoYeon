import React from "react";
import content1 from "../assets/resident.png";
import styled from "styled-components";

const Card = styled.div`
  color: white;
`;

const ContentCard1 = () => {
  return (
    <Card>
      <h1>1</h1>
      <Img src={content1} />
    </Card>
  );
};

export default ContentCard1;
