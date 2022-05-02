import React from "react";
import "./style/App.css";
import "./components/css/Header.css"
import "./components/css/NavBar.css";
import "./components/css/Main.css"

import Header from "./components/Header"
import NavBar from "./components/NavBar";
import Main from "./components/Main";

const App = () => {
    return (
        <div className="app-wrapper">
           <Header/> 
            <NavBar/>
           <Main/>
        </div>
    );
};
// https://olympus.crumina.net/activity/ - site pattern
export default App;
