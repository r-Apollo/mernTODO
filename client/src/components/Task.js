import React from "react";
import "../styles/task.css"

const Task = ({task, deleteTask, finishTask}) => {
    return(
            <div className="btn task">
                <div className="left">
                    <i className="far fa-circle" onClick={() => finishTask(task._id)}></i>
                    {/*This btn will update taskname */}
                    <button className="inner-btn" onClick={() => console.log("update")}>{task.taskName}</button>
                </div>
                <div className="right">
                    <i className="fas fa-times" onClick={async () => await deleteTask(task._id)}></i>
                </div>
            </div>
    )
}

export default Task
