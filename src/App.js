import MainScreen from "./components/Home/mainscreen";

import { BrowserRouter, Routes, Route } from "react-router-dom"
import AboutMe from "./components/AboutMe/aboutme";
import GetContact from "./components/GetContact/getcontact";
import MenuButton from "./components/Menu/menuButton";

function App() {
  return (
    <div>



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
