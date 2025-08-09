import KakaoMap from "./KakaoMap";
import LocationForm from "./LocationForm";
import * as S from "./styled";

const MapContainer = ({ title, locationInput, onFormSubmit }) => {
  return (
    <S.Wrapper>
      <S.H1>{title}</S.H1>
      <S.Description>출발지-경유지-도착지를 모두 입력하세요 !</S.Description>
      <LocationForm onSubmit={onFormSubmit} />
      <KakaoMap locationInput={locationInput} />
    </S.Wrapper>
  );
};

export default MapContainer;
