import React from "react";
import "../styles/main.css";
import Content from "./Content";
import Navbar from "./Navbar";

const Main = () => {
    return(
        <div className="main">
            <Navbar />
            <Content />
        </div>
    )
}

export default Main
