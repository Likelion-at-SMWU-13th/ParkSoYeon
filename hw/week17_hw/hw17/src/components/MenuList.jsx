import React from "react";
import * as S from "../styles/MenuList.styles";

function MenuList({ menus, onMenuClick }) {
  return (
    <S.Main>
      <S.Container>
        {menus.map((menu) => (
          <S.Item key={menu.id}>
            <S.ImgContainer onClick={() => onMenuClick(menu)}>
              <S.Img src={menu.src} alt={menu.name} />
              <S.Button>+</S.Button>
            </S.ImgContainer>
            <S.MenuName>{menu.name}</S.MenuName>
          </S.Item>
        ))}
      </S.Container>
    </S.Main>
  );
}

export default MenuList;
