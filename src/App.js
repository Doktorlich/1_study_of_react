import React from "react";
import "./App.scss";

import Header from "./components/Header/Header.jsx";
import NavBar from "./components/NavBar/NavBar.jsx";
import MembersNewsFeed from "./components/MembersNewsFeed/MembersNewsFeed.jsx";
import Footer from "./components/Footer/Footer";
import Activity from "./components/Activity/Activity";
import { Routes, Router, Switch, Route, Link } from "react-router-dom";

const App = () => {
    return (
        <div className="app-wrapper">
            <Header />
            <NavBar />

            <div className="app-wrapper-content">
                <Routes>
                    <Route path="*" element={<MembersNewsFeed />} />
                    <Route path="/MembersNewsFeed" element={<MembersNewsFeed />} />
                    <Route path="/Activity" element={<Activity />} />
                </Routes>

                {/* <MembersNewsFeed />
                    <Activity /> */}
            </div>
            <Footer />
        </div>
    );
};
// https://olympus.crumina.net/activity/ - site pattern
export default App;
