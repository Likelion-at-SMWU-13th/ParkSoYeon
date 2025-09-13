import React from "react";
import * as S from "../styles/MenuList.styles";

function MenuList({ menus, onMenuSelect }) {
  return (
    <S.MenuGridSection>
      <S.MenuGridContainer>
        {menus.map((menu) => (
          <S.MenuItem key={menu.id}>
            <S.ImageWrapper onClick={() => onMenuSelect(menu)}>
              <S.MenuImage src={menu.src} alt={menu.name} />
              <S.AddButton>+</S.AddButton>
            </S.ImageWrapper>
            <S.MenuName>{menu.name}</S.MenuName>
          </S.MenuItem>
        ))}
      </S.MenuGridContainer>
    </S.MenuGridSection>
  );
}

export default MenuList;
