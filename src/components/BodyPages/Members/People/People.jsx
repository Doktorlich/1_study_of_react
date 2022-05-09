import React from "react";
import "./People.scss";
import user__photo from "./img/user__photo.png";

const People = () => {
    return (
        <main className="user">
            <div className="user__head">
                <img className="user__photo" src={user__photo} alt="" />
                <p className="user__name">Name user</p>
            </div>

            <div className="user__rating">
                <input type="range" min="1" max="100" value="0" name="" className="rating" />
            </div>
            <div className="user__statistic-icon">
                <span>1</span><span>2</span><span>3</span><span>4</span><span>5</span>
            </div>
        </main>
    );
};

export default People;
