import React from "react";
import "./NewsFeed.scss"
const NewsFeed = () => {
    return (
        <div className="news-feed">
            <div className="info-post-profile">
                <div className="photo-profile">PHOTO</div>
                <div className="info-profile">Information profile</div>
                <div className="date-post"> date post</div>
                <div className="window-comment">comment user</div>
            </div>
            <div className="image-post">
                <img src="https://upload.wikimedia.org/wikipedia/commons/1/15/2016-02-23_15-48-06_paris.jpg" width="500px" height="500px" alt="" />
            </div>

            <div className="block-likes">
                like block
            </div>
        </div>
    
    );
};

export default NewsFeed;