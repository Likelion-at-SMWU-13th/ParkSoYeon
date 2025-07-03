import React, { useEffect, useState } from "react";
import axios from "axios";
import Search from "./Search";
import styled from "styled-components";
import { Link } from "react-router-dom";

const RestaurantGrid = styled.div`
  width: 100%;
  back-ground-color: #ffffff;
  place-items: center;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
`;

const Card = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: "Pretendard-Semibold";
  background-color: white;
  border-style: solid;
  border-color: rgb(201, 201, 201);
  border-radius: 1.25rem;
  border-width: 0.125rem;
  padding: 20px;
  margin: 10px 0px;
  text-align: center;
`;

const Name = styled.h2``;

const Img = styled.img`
  width: auto;
  height: 18.75rem;
  border-radius: 0.3125rem;
`;

const Text = styled.p`
  margin: 5px;
`;

const NaverLink = styled.a`
  margin-bottom: 20px;
`;

const Restaurant = () => {
  const [category, setCategory] = useState("한식"); // 카테고리 검색창
  const [search, setSearch] = useState("");
  const [restaurants, setRestaurants] = useState([]); // 음식점 목록

  useEffect(() => {
    axios
      .get("http://localhost:8000/restaurant")
      .then((res) => {
        const searched = res.data.filter(
          (restaurant) =>
            restaurant.category === category && restaurant.name.includes(search) // 사용자가 선택한 카테고리의 음식들만 출력
        );
        setRestaurants(searched);
      })
      .catch((err) => {
        console.error("에러 발생: ", err);
      });
  });

  return (
    <>
      {/* props로 자식 컴포넌트에 값 전달 */}
      <Search
        category={category}
        setCategory={setCategory}
        search={search}
        setSearch={setSearch}
      />
      <RestaurantGrid>
        {restaurants.map((restaurant) => (
          <Card key={restaurant.id}>
            <Name>{restaurant.name}</Name>
            <Text>📍 {restaurant.location}</Text>
            <Text>🍽️ {restaurant.menu}</Text>
            <Link to={`/restaurant/${restaurant.id}`}>
              <Text>🔗가게 정보 더보기 </Text>
            </Link>
          </Card>
        ))}
      </RestaurantGrid>
    </>
  );
};

export default Restaurant;
