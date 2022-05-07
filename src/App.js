import React from "react";
import "./App.scss";

import Header from "./components/Header/Header.jsx";
import NavBar from "./components/NavBar/NavBar.jsx";
import MembersNewsFeed from "./components/MembersNewsFeed/MembersNewsFeed.jsx";
import Footer from "./components/Footer/Footer";
import Activity from "./components/Activity/Activity";

const App = () => {
    return (
        <div className="app-wrapper">
            <Header />
            <NavBar />
            <Activity/>
            <div className="app-wrapper-content">
            <MembersNewsFeed/>
            </div>

            <Footer />
        </div>
    );
};
// https://olympus.crumina.net/activity/ - site pattern
export default App;
