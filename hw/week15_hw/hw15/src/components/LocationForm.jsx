// src/components/LocationForm.jsx
import { useState } from "react";
import * as S from "./styled";

const LocationForm = ({ onSubmit }) => {
  const [locations, setLocations] = useState({
    origin: "",
    waypoint: "",
    destination: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLocations({ ...locations, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ ...locations });
  };

  return (
    <S.Form onSubmit={handleSubmit}>
      <S.Input
        name="origin"
        value={locations.origin}
        onChange={handleChange}
        placeholder="출발지"
        required
      />
      <S.Input
        name="waypoint"
        value={locations.waypoint}
        onChange={handleChange}
        placeholder="경유지"
        required
      />
      <S.Input
        name="destination"
        value={locations.destination}
        onChange={handleChange}
        placeholder="도착지"
        required
      />
      <S.Button type="submit">길찾기</S.Button>
    </S.Form>
  );
};

export default LocationForm;
