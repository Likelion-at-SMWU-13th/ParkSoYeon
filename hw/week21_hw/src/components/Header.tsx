import styled from "styled-components";
import logo from "../assets/smwu.png";

const Header = () => {
  return (
    <HeaderContainer>
      <Img src={logo} />
      <Title>숙명여자대학교 맛집 LIST</Title>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.div`
  display: flex;
  width: 100%;
  height: 12.5rem;
  justify-content: center;
  align-items: end;
`;

const Img = styled.img`
  width: 5rem;
  height: 5.3125rem;
  margin: 1.125rem 0px;
`;

const Title = styled.h1`
  font-family: "Pretendard";
  color: Navy;
  font-size: 3.125rem;
  padding-left: 0.625rem;
`;
