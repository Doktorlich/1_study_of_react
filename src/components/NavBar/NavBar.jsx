import React from "react";
import Sprite from "../../images/icons.svg"
import "./NavBar.css";



const spriteSrc = <img src={Sprite} width="10px"  alt="ERROR"/>
const NavBar = () => {
    return (
        <nav className="nav-bar">
            <ul className="list-icons">
                <li className="listIcon__1 icons__style"><a href="#"><img src={Sprite} alt="ERROR"/></a></li>
                <li className="listIcon__2 icons__style"><a href="#"><img src={Sprite} alt="ERROR"/></a></li>
                <li className="listIcon__3 icons__style"><a href="#"><img src={Sprite} alt="ERROR"/></a></li>
                <li className="listIcon__4 icons__style"><a href="#"><img src={Sprite} alt="ERROR"/></a></li>
                <li className="listIcon__5 icons__style"><a href="#"><img src={Sprite} alt="ERROR"/></a></li>
                <li className="listIcon__6 icons__style"><a href="#"><img src={Sprite} alt="ERROR"/></a></li>
                <li className="listIcon__7 icons__style"><a href="#"><img src={Sprite} alt="ERROR"/></a></li>
                <li className="listIcon__8 icons__style"><a href="#"><img src={Sprite} alt="ERROR"/></a></li>
                <li className="listIcon__9 icons__style"><a href="#"><img src={Sprite} alt="ERROR"/></a></li>
                <li className="listIcon__10 icons__style"><a href="#"><img src={Sprite} alt="ERROR"/></a></li>
            </ul>
        </nav>
    );
};

export default NavBar;
