import React from "react";
import "./Menu.scss";
import More from "./More/More";

const Menu = () => {
    return (
        <nav className="menu">
            <a href="#">
                <div className="overview">
                    <a href="#" className="overview__link">
                        <img src="" alt="" className="overview__img" />
                        <span>Overview</span>
                    </a>
                </div>
            </a>
            <a href="#">
                <div className="about">
                    <a href="#" className="about__link"></a>
                    <img src="" alt="" className="about__img" />
                    <span>About</span>
                </div>
            </a>
            <a href="#">
                <div className="activity">
                    <img src="" alt="" className="activity__img" />
                    <span>Activity</span>
                </div>
            </a>
            <a href="#">
                <div className="posts">
                    <a href="#" className="posts__link"></a>
                    <img src="" alt="" className="posts__img" />
                    <span>Posts</span>
                </div>
            </a>
            <a href="#">
                <div className="comments">
                    <a href="#" className="comments__link"></a>
                    <img src="" alt="" className="comments__img" />
                    <span>Comments</span>
                </div>
            </a>
            <a href="#">
            <More />
            </a>
        </nav>
    );
};

export default Menu;
