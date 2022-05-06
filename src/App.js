import React from "react";
import "./App.css";

import Header from "./components/Header/Header.jsx"
import NavBar from "./components/NavBar/NavBar.jsx";
import Main from "./components/Main/Main.jsx";
import Footer from "./components/Footer/Footer";

const App = () => {
    return (
        <div className="app-wrapper">
            <Header/> 
            <NavBar/>
            <Main/>
            <Footer/>
        </div>
    );
};
// https://olympus.crumina.net/activity/ - site pattern
export default App;
