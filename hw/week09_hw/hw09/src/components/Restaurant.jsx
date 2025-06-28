import React, { useEffect, useState } from "react";
import axios from "axios";
import Search from "./Search";
import styled from "styled-components";

const RestaurantGrid = styled.div`
  back-ground-color: #ffffff;
  border-color: Navy;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding: 0px 100px;
`;

const Card = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  font-family: "Pretendard-Semibold";
  background-color: white;
  border-style: solid;
  border-color: rgb(201, 201, 201);
  border-radius: 20px;
  border-width: 2px;
  margin: 20px;
  padding: 20px 0px;
`;

const Name = styled.h2`
  margin: 10px 0px;
`;

const Img = styled.img`
  width: auto;
  height: 300px;
  margin: 10px 0px;
  border-radius: 5px;
`;

const Text = styled.p`
  margin: 5px;
`;

const Link = styled.a`
  margin: 5px;
`;

const Restaurant = () => {
  const [search, setSearch] = useState("한식"); // 검색창
  const [restaurants, setRestaurants] = useState([]); // 음식점 목록

  useEffect(() => {
    axios
      .get("http://localhost:8000/restaurant")
      .then((res) => {
        const searched = res.data.filter(
          (restaurant) => restaurant.category === search // 사용자가 선택한 카테고리의 음식들만 출력
        );
        setRestaurants(searched);
      })
      .catch((err) => {
        console.error("에러 발생: ", err);
      });
  });

  return (
    <>
      <Search search={search} setSearch={setSearch} />
      <RestaurantGrid>
        {restaurants.map((restaurant) => (
          <Card key={restaurant.id}>
            <Name>{restaurant.name}</Name>

            <Text>📍 {restaurant.location}</Text>
            <Text>🍽️ {restaurant.menu}</Text>
            <Link href={restaurant.link}>🔗 {restaurant.link}</Link>
            <Img src={restaurant.picture} />
          </Card>
        ))}
      </RestaurantGrid>
    </>
  );
};

export default Restaurant;
