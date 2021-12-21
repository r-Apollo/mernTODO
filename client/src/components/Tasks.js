import React, { useEffect, useState } from "react";
import Axios from "axios";
import Task from "./Task";
import "../styles/tasks.css"

const Tasks = () => {
    const [fetchedTasks, updateFetchedTasks] = useState([])

    const fetchTasks = async () => {
        const res = await Axios.get("http://localhost:5000/todo")
        updateFetchedTasks(res.data)
    }

    useEffect(() => {
    }, [fetchedTasks])

    return(
        <div className="tasklist">
            {fetchedTasks.map(task => <Task task={task} />)}
            <button className="add btn" onClick={() => fetchTasks()}>Test</button>
        </div>
    )
}

export default Tasks
