import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.scss";


{/* <object  type="image/svg+xml"
    height="70"
    width="150"
    data="../../images/icons.svg" >
  
</object> */}

const NavBar = () => {
    return (
        <nav className="nav-bar">
            <ul className="list-icon">
                <li className="list-icon__i-0 icons__style"><img /></li>
                <li className="list-icon__i-1 icons__style"><NavLink to="/MembersNewsFeed"><img /></NavLink ></li>
                <li className="list-icon__i-2 icons__style"><NavLink to="/Activity"><img /></NavLink></li>
                <li className="list-icon__i-3 icons__style"><NavLink to="/Members"><img /></NavLink></li>
                <li className="list-icon__i-4 icons__style"><NavLink to="/Groups"><img /></NavLink></li>
                <li className="list-icon__i-5 icons__style"><NavLink to="/Photos"><img /></NavLink></li>
                <li className="list-icon__i-6 icons__style"><NavLink to="/Music"><img /></NavLink></li>
                <li className="list-icon__i-7 icons__style"><NavLink to="/Video"><img /></NavLink></li>
                <li className="list-icon__i-8 icons__style"><NavLink to="/Events"><img /></NavLink></li>
                <li className="list-icon__i-9 icons__style"><NavLink to="/Forum"><img /></NavLink></li>
                <li className="list-icon__i-10 icons__style"><NavLink to="/BlogGrid"><img /></NavLink></li>
                <li className="list-icon__i-11 icons__style"><NavLink to="/Shop"><img /></NavLink></li>
            </ul>
        </nav>
    );
};

export default NavBar;
