import "./menu.css"

import {GiHamburgerMenu} from "react-icons/gi"

function MenuButton(){
    return <div className="menu-button-div">
       <a href="/menu" className="menu-button"><GiHamburgerMenu/></a>
    </div>
}

export default MenuButton;