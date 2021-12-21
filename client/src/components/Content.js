import React, { useState } from "react";
import "../styles/content.css"
import Tasks from "./Tasks";

const Content = () => {
    const [content, setContent] = useState("allTasks")

    if (content === "allTasks") {
        return(
            <div className="content">
                <div className="inbox">
                    <div className="inbox-title">
                        <h1>Inbox</h1>
                    </div>
                    <div className="tasks">
                        <Tasks />
                    </div>
                </div>
            </div>
        )
    }

}

export default Content
