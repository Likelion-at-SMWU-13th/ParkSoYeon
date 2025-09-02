import "./App.css";
import { Outlet } from "react-router-dom";
import ToggleBtn from "./components/ToggleBtn";

function App() {
  return (
    <>
      <Outlet />
      <ToggleBtn />
    </>
  );
}

export default App;
