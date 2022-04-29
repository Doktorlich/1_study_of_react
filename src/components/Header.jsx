import React from "react";

const Header = () => {
    return (
        <header className="header">
           <div className="element">
                <div className="element-left"></div>
                <div className="element-right"></div>
           </div>
           <div className="down-header">
               <ul className="text-menu">
                   <li className="Home"><a href="#">Home</a></li>
                   <li className="Community"><a href="#">Community</a></li>
                   <li className="Pages"><a href="#">Pages</a></li>
                   <li className="Blog"><a href="#">Blog</a></li>
                   <li className="Events"><a href="#">Events</a></li>
                   <li className="Shop"><a href="#">Shop</a></li>
               </ul>
           </div>
        </header>
    );
};

export default Header;
