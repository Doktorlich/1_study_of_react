import React from "react";
import "./NavBar.scss";




const NavBar = () => {
    return (
        <nav className="nav-bar">
            <ul className="list-icon">
                <li className="list-icon__i-1 icons__style"><a href="/MembersNewsFeed"><img /></a></li>
                <li className="list-icon__i-2 icons__style"><a href="/Activity"><img /></a></li>
                <li className="list-icon__i-3 icons__style"><a href=""><img /></a></li>
                <li className="list-icon__i-4 icons__style"><a href="#"><img /></a></li>
                <li className="list-icon__i-5 icons__style"><a href="#"><img /></a></li>
                <li className="list-icon__i-6 icons__style"><a href="#"><img /></a></li>
                <li className="list-icon__i-7 icons__style"><a href="#"><img /></a></li>
                <li className="list-icon__i-8 icons__style"><a href="#"><img /></a></li>
                <li className="list-icon__i-9 icons__style"><a href="#"><img /></a></li>
                <li className="list-icon__i-10 icons__style"><a href="#"><img /></a></li>
            </ul>
        </nav>
    );
};

export default NavBar;
