import { create } from "zustand";
import { devtools } from "zustand/middleware";

const useCartStore = create(
  devtools((set) => ({
    // 장바구니 상태
    menus: [],
    // 액션
    // 장바구니에 메뉴 추가
    addCart: (menuToAdd) =>
      set((state) => {
        const existingMenu = state.menus.find(
          (menu) => menu.id === menuToAdd.id
        );

        if (existingMenu) {
          // 이미 장바구니에 있는 메뉴면 수량 추가
          const updatedMenus = state.menus.map((menu) =>
            menu.id === menuToAdd.id
              ? { ...menu, quantity: menu.quantity + menuToAdd.quantity }
              : menu
          );
          return { menus: updatedMenus };
        } else {
          // 장바구니에 없는 메뉴면 새로 추가
          return { menus: [...state.menus, menuToAdd] };
        }
      }),

    // 장바구니에서 메뉴 삭제
    removeCart: (id) =>
      set((state) => ({
        menus: state.menus.filter((menu) => menu.id !== id),
      })),

    // 수량 증가
    increaseItem: (id) =>
      set((state) => ({
        menus: state.menus.map((menu) =>
          menu.id === id ? { ...menu, quantity: menu.quantity + 1 } : menu
        ),
      })),

    // 수량 감소
    decreaseItem: (id) =>
      set((state) => ({
        menus: state.menus
          .map((menu) =>
            menu.id === id ? { ...menu, quantity: menu.quantity - 1 } : menu
          )
          .filter((menu) => menu.quantity > 0), // 수량이 0이 된 아이템은 장바구니에서 자동으로 제거
      })),
  }))
);

export default useCartStore;
