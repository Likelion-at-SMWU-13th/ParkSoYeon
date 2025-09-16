import React, { useState, useEffect } from "react";
import * as S from "../styles/Modal.styles";

function Modal({ menu, onClose, onConfirm }) {
  const [quantity, setQuantity] = useState(1); // 수량 상태 관리

  // 수량은 항상 1로 초기화
  useEffect(() => {
    if (menu) {
      setQuantity(1);
    }
  }, [menu]);

  // menu 없으면 모달 렌더링 x
  if (!menu) {
    return null;
  }

  // 메뉴 담기 클릭 시
  const handleConfirm = () => {
    onConfirm({ ...menu, quantity }); // 선택된 메뉴 정보와 수량을 부모 컴포넌트로 전달
    onClose(); // 모달을 닫기
  };

  return (
    <S.Container onClick={onClose}>
      <S.Content onClick={(e) => e.stopPropagation()}>
        <S.Title>{menu.name}</S.Title>
        <S.Image src={menu.src} alt={menu.name} />
        <S.QuantityControl>
          <S.Button onClick={() => setQuantity((q) => q - 1)}>-</S.Button>
          <span>{quantity}</span>
          <S.Button onClick={() => setQuantity((q) => q + 1)}>+</S.Button>
        </S.QuantityControl>
        <S.ConfirmButton onClick={handleConfirm}>메뉴 담기</S.ConfirmButton>
      </S.Content>
    </S.Container>
  );
}

export default Modal;
