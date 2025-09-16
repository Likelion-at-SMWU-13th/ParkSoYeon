import React, { useState } from "react";
import useCartStore from "./store/store";
import Header from "./components/Header";
import Cart from "./components/Cart";
import MenuList from "./components/MenuList";
import { iceCreamMenus } from "./data/menuData";
import Modal from "./components/Modal";

function App() {
  const [activeMenu, setActiveMenu] = useState(null); // 모달 상태 관리
  const { addCart } = useCartStore();

  // 특정 메뉴 클릭시
  const handleOpenModal = (menu) => {
    setActiveMenu(menu); // activeMenu 상태를 클릭된 메뉴로 바꿔서 모달 열기
  };

  // 모달 닫기
  const handleCloseModal = () => {
    setActiveMenu(null); // activeMenu 상태를 null로 바꾸고 모달 닫기
  };

  return (
    <>
      <Header />
      <Cart />
      <MenuList menus={iceCreamMenus} onMenuClick={handleOpenModal} />
      <Modal
        menu={activeMenu} // 모달에 뜨는 메뉴 정보
        onClose={handleCloseModal} // 모달 닫기 함수
        onConfirm={addCart} // 장바구니 추가 함수
      />
    </>
  );
}

export default App;
