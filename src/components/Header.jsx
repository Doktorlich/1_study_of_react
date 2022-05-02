import React from "react";


const Header = () => {
    return (
        <header className="header">
           <div className="one-line-header">
                <div className="one-line-header__left"></div>
                <input type="one-line-header__search" className="search-form"/>
                <div className="one-line-header__right"></div> 
                
           </div>
           
           <div className="down-header">
               <ul className="text-menu">
                   <li className="text-menu__Home"><a href="#">Home</a></li>
                   <li className="text-menu__Community"><a href="#">Community</a></li>
                   <li className="text-menu__Pages"><a href="#">Pages</a></li>
                   <li className="t ext-menu__Blog"><a href="#">Blog</a></li>
                   <li className="text-menu__Events"><a href="#">Events</a></li>
                   <li className="text-menu__Shop"><a href="#">Shop</a></li>
               </ul>
           </div>
        </header>
    );
};
 
export default Header;
