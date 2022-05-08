import React from "react";
import "./People.scss" 
import user__photo from "./img/user__photo.png"



const People = () => {
    return (
        <div className=".user">
            
            <div className=".user__face">
                <img className=".user__photo" src={user__photo} alt=""  />
                <p className=".user__name"></p>
            </div>
            
            <div className=".user__rating"></div>
            <div className=".user__statistic-icon"></div>
        </div>
    );
};
 
export default People;
