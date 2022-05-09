import React from "react";
import "./Members.scss" 
import People from "./People/People.jsx";



const Members = () => {
    return (
        <main className="global-members">
            <div className="filter"></div>
            <div className="user-windows">
                <People /><People /><People />
                <People /><People /><People />
                <People /><People /><People />
                

   
                
            </div>
        </main>
    );
};
 
export default Members;
