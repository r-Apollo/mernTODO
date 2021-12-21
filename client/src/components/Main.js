import React, { useState } from "react";
import "../styles/main.css";
import Content from "./Content";
import Navbar from "./Navbar";

const Main = () => {

    const [content, setContent] = useState("unfinishedTasks")

    const changeContent = (displayedContent) => {
        setContent(displayedContent)
    }

    return(
        <div className="main">
            <Navbar changeContent={changeContent} />
            <Content content={content} />
        </div>
    )
}

export default Main
