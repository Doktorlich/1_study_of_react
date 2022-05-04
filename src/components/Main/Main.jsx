import React from "react";
import "./Main.scss"
import AdBlock from "./AdBlock/AdBlock.jsx";
import NewsFeed from "./NewsFeed/NewsFeed";
const Main = () => {
    return (
    <main className="content">
      <AdBlock/>
      <NewsFeed/>
      
    </main>
    );
};

export default Main;
