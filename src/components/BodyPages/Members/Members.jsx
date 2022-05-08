import React from "react";
import "./Members.scss" 
import People from "./People/People";



const Members = () => {
    return (
        <main className="global-members">
            <div className="filter"></div>
            <div className="user-windows">
                <People />
                
            </div>
        </main>
    );
};
 
export default Members;
