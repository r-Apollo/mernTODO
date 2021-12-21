import React from "react";

const Task = ({task}) => {
    return(
            <button className="btn" key={task._id}>{task.taskName}</button>
    )
}

export default Task
