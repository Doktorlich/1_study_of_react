import React from "react";
import "./MembersNewsFeed.scss"
import AdBlock from "./AdBlock/AdBlock.jsx";
import NewsFeed from "./NewsFeed/NewsFeed";
const Main = () => {
    return (
    <main className="content">
      <AdBlock/>
      {/* test props */}
      <NewsFeed name="Kira" amountLike="12"/>
      
    </main>
    );
};

export default Main;
