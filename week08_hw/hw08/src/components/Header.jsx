import React from "react";
import tving from "../assets/tving.svg";
import search1 from "../assets/search1.svg";
import profile from "../assets/profileImage.webp";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  align-self: center;
  height: 5rem;
  font-family: "Pretendard-Semibold";
  font-size: 1.125rem;
`;

const Logo = styled.img`
  padding: 1.4rem;
`;

const Nav = styled.nav`
  display: flex;
  align-self: center;
  gap: 2rem;
  flex-direction: row;
  color: #d3d3d3;
  algin-items: center;
`;

// 내비게이션 위에 마우스 올리면 색상 바뀌게
// &:hover는 CSS에서 마우스를 올렸을 때 (&은 현재 요소 자신을 의미미)
const NavItem = styled.p`
  cursor: pointer;

  &:hover {
    color: white;
  }
`;

const Icons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin-left: auto;
`;

const Search = styled.img`
  width: 1.5rem;
  align-self: center;
  padding-left: 1.25rem;
`;

const Profile = styled.img`
  width: 2.5rem;
  height: 2.5rem;
  align-self: center;
  padding-left: 2rem;
  padding-right: 3rem;
`;

const Header = () => {
  return (
    <Container>
      <Logo src={tving} />

      <Nav>
        <NavItem>드라마</NavItem>
        <NavItem>예능</NavItem>
        <NavItem>영화</NavItem>
        <NavItem>스포츠</NavItem>
        <NavItem>애니</NavItem>
        <NavItem>뉴스</NavItem>
        <NavItem>라이브</NavItem>
      </Nav>

      <Icons>
        <Search src={search1} />
        <Profile src={profile} />
      </Icons>
    </Container>
  );
};

export default Header;
