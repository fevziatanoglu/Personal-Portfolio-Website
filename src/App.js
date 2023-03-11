import MainScreen from "./components/Home/mainscreen";

import { BrowserRouter, Routes, Route } from "react-router-dom"
import AboutMe from "./components/AboutMe/aboutme";
import GetContact from "./components/GetContact/getcontact";
import MenuButton from "./components/Menu/menuButton";
import Menu from "./components/Menu/menu";
import Menu1 from "./components/NewMenu/Menu/menu1";

function App() {
  return (
    <div>
      <Menu1/>


      <BrowserRouter>
        <Routes>

          <Route path={""} element={<MainScreen />} />
          <Route path="aboutme" element={<AboutMe />} />
          <Route path="getcontact" element={<GetContact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
