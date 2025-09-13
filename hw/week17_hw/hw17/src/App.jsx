import React from "react";
import Header from "./components/Header";
import MenuList from "./components/MenuList";
import { iceCreamMenus } from "./data/menuData";

function App() {
  return (
    <>
      <Header />
      <MenuList menus={iceCreamMenus} />
    </>
  );
}

export default App;
