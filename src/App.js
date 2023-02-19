import MainScreen from "./components/Home/mainscreen";

import { BrowserRouter, Routes, Route } from "react-router-dom"
import AboutMe from "./components/AboutMe/aboutme";
import GetContact from "./components/GetContact/getcontact";
import MenuButton from "./components/Menu/menuButton";
import Menu from "./components/Menu/menu";

function App() {
  return (
    <div>



      <BrowserRouter>
        <Routes>

          <Route path={""} element={<MainScreen />} />
          <Route path="aboutme" element={<AboutMe />} />
          <Route path="getcontact" element={<GetContact />} />
          <Route path="menu" element={<Menu />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
