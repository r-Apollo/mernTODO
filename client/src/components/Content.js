import React from "react";
import "../styles/content.css"
import Tasks from "./Tasks";
import FinishedTasks from "./FinishedTasks";

const Content = ({content}) => {
    if (content === "unfinishedTasks") {
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
    } else if (content === "finishedTasks") {
        return(
            <div className="content">
                <div className="inbox">
                    <div className="inbox-title">
                        <h1>Finished Tasks</h1>
                    </div>
                    <div className="tasks">
                        <FinishedTasks />
                    </div>
                </div>
            </div>
        )
    }

}

export default Content
