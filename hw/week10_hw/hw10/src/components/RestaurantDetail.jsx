import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";

const Container = styled.div`
  font-family: "Pretendard-Semibold";s
  width: 100%;
  height: 55vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const Name = styled.h2`
  margin-top: 1.875rem;
  font-size: 1.5625rem;
`;
const Img = styled.img`
  width: 60%;
  margin: 0.625rem 0rem;
  border-radius: 3.125rem;
`;
const Text = styled.p`
  margin: 0.4rem;
`;

const Link = styled.a``;

const RestaurantDetail = () => {
  const { id } = useParams();
  const [restaurant, setRestaurant] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:8000/restaurant/${id}`)
      .then((res) => {
        setRestaurant(res.data);
      })
      .catch((err) => console.error("에러 발생: ", err));
  }, [id]);

  if (!restaurant) return <p>로딩 중...</p>;
  return (
    <Container key={restaurant.id}>
      <Name>
        " {restaurant.name} "의 정보가 <br></br>궁금하시군요?
      </Name>
      <Img src={restaurant.picture} />
      <Text>🧾 {restaurant.description}</Text>
      <Text>📍 {restaurant.location}</Text>
      <Text>🍽️ {restaurant.menu}</Text>
      <Link href={restaurant.link}>🔗 {restaurant.link}</Link>
    </Container>
  );
};

export default RestaurantDetail;
