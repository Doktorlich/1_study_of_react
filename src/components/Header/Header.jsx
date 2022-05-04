import React from "react";
import mod from"./Header.module.css" //mod -- module



const Header = () => {
    return (
        <header className={mod.header}>
           <div className={mod.oneLineHeader}>
                <div className={mod.oneLineHeader__left}></div>
                <input className={mod.oneLineHeader__searchForm} type="search" />
                <div className={mod.oneLineHeader__right}></div> npm install node-sass -S
                
           </div>
           
           <div className={mod.downHeader}>
               <ul className={mod.textMenu}>
                   <li className={mod.textMenu__Home}><a href="#">Home</a></li>
                   <li className={mod.textMenu__Community}><a href="#">Community</a></li>
                   <li className={mod.textMenu__Pages}><a href="#">Pages</a></li>
                   <li className={mod.textMenu__Blog}><a href="#">Blog</a></li>
                   <li className={mod.textMenu__Events}><a href="#">Events</a></li>
                   <li className={mod.textMenu__Shop}><a href="#">Shop</a></li>
               </ul>
           </div>
        </header>
    );
};
 
export default Header;
