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
      <NewsFeed name="Mara" amountLike="10"/>
      <NewsFeed name="Klara" amountLike="2"/>
      <NewsFeed name="Sara" amountLike="96"/>
      <NewsFeed name="Dir" amountLike="31"/>
    </main>
    );
};

export default Main;
