import React from "react";
import "./App.scss";

import Header from "./components/Header/Header.jsx";
import NavBar from "./components/NavBar/NavBar.jsx";
import MembersNewsFeed from "./components/BodyPages/MembersNewsFeed/MembersNewsFeed.jsx";
import Footer from "./components/Footer/Footer";
import Activity from "./components/BodyPages/Activity/Activity";
import Members from "./components/BodyPages/Members/Members";
import { Routes, Router, Switch, Route, Link } from "react-router-dom";
import Groups from "./components/BodyPages/Groups/Groups"
import Photos from "./components/BodyPages/Photos/Photos"
import Music from "./components/BodyPages/Music/Music"
import Video from "./components/BodyPages/Video/Video"
import Events from "./components/BodyPages/Events/Events"
import Forum from "./components/BodyPages/Forum/Forum"
import BlogGrid from "./components/BodyPages/BlogGrid/BlogGrid"
import Shop from "./components/BodyPages/Shop/Shop"
const App = () => {
    return (
        <div className="app-wrapper">
            <Header />
            <NavBar />

            <div className="app-wrapper-content">
                <Routes>
                    <Route path="/MembersNewsFeed" element={<MembersNewsFeed />} />
                    <Route path="/Activity" element={<Activity />} />
                    <Route path="/Members" element={<Members/>} />
                    <Route path="/Groups" element={<Groups/>} />
                    <Route path="/Photos" element={<Photos />} />
                    <Route path="/Music" element={<Music/>} />
                    <Route path="/Video" element={<Video/>} />
                    <Route path="/Events" element={<Events/>} />
                    <Route path="/Forum" element={<Forum/>} />
                    <Route path="/BlogGrid" element={<BlogGrid/>} />
                    <Route path="/Shop" element={<Shop/>} />
                    
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
