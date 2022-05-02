import React from "react";

const Header = () => {
    return (
        <header className="header">
           <div className="element">
                <div className="element__left"></div>
                <div className="element__right"></div> 
           </div>
           <div className="down-header">
               <ul className="text-menu">
                   <li className="text-menu__Home"><a href="#">Home</a></li>
                   <li className="text-menu__Community"><a href="#">Community</a></li>
                   <li className="text-menu__Pages"><a href="#">Pages</a></li>
                   <li className="text-menu__Blog"><a href="#">Blog</a></li>
                   <li className="text-menu__Events"><a href="#">Events</a></li>
                   <li className="text-menu__Shop"><a href="#">Shop</a></li>
               </ul>
           </div>
        </header>
    );
};

export default Header;
