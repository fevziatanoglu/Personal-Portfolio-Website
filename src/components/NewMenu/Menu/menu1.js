import "./menu1.css"

import { useState } from "react";

function Menu1() {

    const [active, setActive] = useState(false);

    const handleActive = () => {
        console.log("test")
        setActive(!active);
    }

    return <div className="menu">
        <button className="menu-button" onClick={(e) => handleActive()}> {active ? "Menu" : "X"}</button>

        <div className={active ? "active-menu menu-screen " : "menu-screen"}>
            <div className="main-content-50 menu-links">
                <a href="/" className="menu-link">Home</a>
                <a href="/aboutme" className="menu-link">About Me</a>
                <a href="/getcontact" className="menu-link">Get Contact</a>
            </div>
        </div>

    </div>
}

export default Menu1;