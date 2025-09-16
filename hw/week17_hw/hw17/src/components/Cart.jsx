import React from "react";
import useCartStore from "../store/store";
import * as S from "../styles/Cart.styles";

function Cart() {
  const { menus, removeCart } = useCartStore();

  return (
    <S.Container>
      <S.ItemsContainer>
        {menus.length === 0 ? (
          <S.Empty>장바구니에 담긴 메뉴가 없어요.</S.Empty>
        ) : (
          // 장바구니에 담긴 메뉴들을 map 을 통해 순회
          menus.map((menu) => (
            <S.Item key={menu.id}>
              <S.Align>
                <S.Img src={menu.src} alt={menu.name} />
                <S.Name>
                  {menu.name} ({menu.quantity})
                </S.Name>
              </S.Align>
              <S.Align>
                <S.RemoveButton onClick={() => removeCart(menu.id)}>
                  x
                </S.RemoveButton>
              </S.Align>
            </S.Item>
          ))
        )}
      </S.ItemsContainer>
    </S.Container>
  );
}

export default Cart;
