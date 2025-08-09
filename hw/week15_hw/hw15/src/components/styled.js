import styled from "styled-components";

export const Wrapper = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100dvh;
  background-color: #ecececff;
  padding: 40px 0;
  margin: 0 auto;
`;

export const H1 = styled.h1`
  font-size: 2.2rem;
  font-weight: 700;
  color: #3b3b3b;
  margin-bottom: 2rem;
`;

export const Description = styled.p`
  font-size: 1rem;
  font-weight: 600;
  color: #3b3b3b;
  margin-bottom: 2rem;
`;

export const MapContainer = styled.div`
  border-radius: 1rem;
  box-shadow: 0px 0px 10px 4px rgba(38, 38, 38, 0.2);
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
  width: 25%;
`;

export const Input = styled.input`
  font-size: 1rem;
  border-radius: 1rem;
  height: 2.5rem;
  padding-left: 1rem;
  background-color: white;
  border: 2px #ccc solid;
`;

export const Button = styled.button`
  font-size: 1rem;
  font-weight: 600;
  height: 3rem;
  border-radius: 1rem;
  padding: 5px;
  background-color: #aaddffff;
  margin-bottom: 2rem;
  border: 2px #ccc solid;
`;

export const Map = styled.div`
  width: 50%;
  height: 400px;
  border: 2px solid #ccc;
  border-radius: 8px;
`;
