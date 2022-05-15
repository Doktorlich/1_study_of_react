import React from "react";
import "./More.scss";

const More = () => {
    return (
        <div className="more">
            <img src="" alt="" className="more__img" />
            <span>More</span>
            <div className="click-more">
                <div className="click-more__friends">
                    <img className="friends__img" />
                    <span>Friends</span>
                </div>
                <div className="click-more__groups">
                    <img className="groups__img" />
                    <span>groups</span>
                </div>
                <div className="click-more__forums">
                    <img className="forums__img" />
                    <span>forums</span>
                </div>
                <div className="click-more__media">
                    <img className="media__img" />
                    <span>media</span>
                </div>
                <div className="click-more__badges">
                    <img className="badges__img" />
                    <span>badges</span>
                </div>

                <div className="click-more__reviews">
                    <img className="reviews__img" />
                    <span>reviews</span>
                </div>
            </div>
        </div>
    );
};

export default More;
