import React from "react";
import * as S from "../styles/Header.styles";
import logo from "../assets/logo.png";

function Header() {
  return (
    <S.Container>
      <S.Logo src={logo} />
    </S.Container>
  );
}

export default Header;
