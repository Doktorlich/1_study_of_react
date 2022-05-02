import React from "react";
import  Img  from "../images/icons.svg";
const NavBar = () => {
    return (
        <nav className="nav-bar">
            <ul className="list-icons">
                <li className="list-icons__i-1 icons__style"><a href="#"><img src={Img} alt="ERROR"/></a></li>
                <li className="list-icons__i-2 icons__style"><a href="#"><img src="../images/icons.jpg"/></a></li>
                <li className="list-icons__i-3 icons__style"><a href="#"><img src="../images/icons.jpg"/></a></li>
                <li className="list-icons__i-4 icons__style"><a href="#"><img src="../images/icons.jpg"/></a></li>
                <li className="list-icons__i-5 icons__style"><a href="#"><img src="../images/icons.jpg"/></a></li>
                <li className="list-icons__i-6 icons__style"><a href="#"><img src="../images/icons.jpg"/></a></li>
                <li className="list-icons__i-7 icons__style"><a href="#"><img src="../images/icons.jpg"/></a></li>
                <li className="list-icons__i-8 icons__style"><a href="#"><img src="../images/icons.jpg"/></a></li>
                <li className="list-icons__i-9 icons__style"><a href="#"><img src="../images/icons.jpg"/></a></li>
                <li className="list-icons__i-10 icons__style"><a href="#"><img src="../images/icons.jpg"/></a></li>
            </ul>
        </nav>
    );
};

export default NavBar;
