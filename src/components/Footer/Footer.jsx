import React from "react";
import "./Footer.scss" 



const Footer = () => {
    return (
        <footer className="footer">
            <div className="info-group">
                <img src=""  />
                <p>Text information about the site</p>
                <div className="social-web-icons"></div>
            </div>
            <div className="group-link">    
                <div className="group-main">
                    <span>Main links</span>
                    <a href="#">link</a>
                    <a href="#">link</a>
                    <a href="#">link</a>
                    <a href="#">link</a>
                </div>
                <div className="group-blog">
                    <span>Blog</span>
                    <a href="#">link</a>
                    <a href="#">link</a>
                    <a href="#">link</a>
                    <a href="#">link</a>
                </div>
                <div className="group-olympus">
                    <span>Olympus</span>
                    <a href="#">link</a>
                    <a href="#">link</a>
                    <a href="#">link</a>
                    <a href="#">link</a>
                </div>
                <div className="group-profile">
                    <span>Profile</span>
                    <a href="#">link</a>
                    <a href="#">link</a>
                    <a href="#">link</a>
                    <a href="#">link</a>
                </div>
            </div>
        </footer>
    );
};
 
export default Footer;
