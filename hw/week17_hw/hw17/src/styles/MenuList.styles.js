import styled from "styled-components";

export const Main = styled.section`
  margin-bottom: 70px;
`;

export const Container = styled.div`
  width: 70%;
  display: grid;
  margin: 0 auto;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px 20px;
`;

export const Item = styled.div`
  text-align: center;
`;

export const ImgContainer = styled.div`
  position: relative;
  cursor: pointer;
  border-radius: 50%;

  // hover 시 + 버튼 보이게
  &:hover button {
    opacity: 1;
  }
`;

export const Img = styled.img`
  width: 75%;
`;

export const Button = styled.button`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  font-size: 2rem;
  line-height: 40px;
  opacity: 0; // 기본적으로 안 보이게
  transition: opacity 0.2s ease;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 4px;
  cursor: pointer;
`;

export const MenuName = styled.p`
  margin-top: 10px;
  font-size: 20px;
  color: #333;
`;
