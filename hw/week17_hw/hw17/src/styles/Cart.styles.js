import styled from "styled-components";

export const Container = styled.div`
  width: 80%;
  margin: 40px auto;
  background-color: #f9f9f9;
  border-radius: 10px;
  padding: 20px;
`;

export const ItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Empty = styled.p`
  color: #777;
  font-size: 16px;
  padding: 10px 0;
  text-align: center;
  background-color: #f9f9f9;
`;

export const Item = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 10px 20px;
  gap: 15px;
  font-size: 0.9rem;
`;

export const Align = styled.div`
  display: flex;
  align-items: center;
`;

export const Img = styled.img`
  width: 40px;
  height: 40px;
  object-fit: cover;
`;

export const Name = styled.span`
  padding-left: 10px;
  font-weight: 500;
`;

export const RemoveButton = styled.button`
  background: none;
  border: none;
  font-size: 1.5rem;
  color: #aaa;
  cursor: pointer;
  padding: 0 5px;

  &:hover {
    color: #333;
  }
`;
