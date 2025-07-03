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
  margin-top: 30px;
  font-size: 25px;
`;
const Img = styled.img`
  width: 60%;
  margin: 15px 0px;
  border-radius: 50px;
`;
const Text = styled.p`
  margin: 5px;
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
        " {restaurant.name} "의 정보가 <br></br>궁금하시군요 ?
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
