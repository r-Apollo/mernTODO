import React, { useEffect, useState } from "react";
import Axios from "axios";
import Task from "./Task";
import "../styles/tasks.css"

const Tasks = () => {
    const [fetchedTasks, updateFetchedTasks] = useState([])
    const [addActivated, setAddActivated] = useState(false)

    //fetching data from the server
    const fetchTasks = async () => {
        const res = await Axios.get("http://localhost:5000/todo")
        updateFetchedTasks(res.data)
    }

    const toggleAddButton = () => {
        if (addActivated) setAddActivated(false)
        else setAddActivated(true)
    }

    //first render
    useEffect(() => {fetchTasks()}, [])

    //on adding new Data
    useEffect(() => {
    }, [fetchedTasks, addActivated])

    if (!addActivated) {
        return(
            <div className="tasklist">
                {fetchedTasks.map(task => <Task task={task} />)}
                <button className="add btn" onClick={() => toggleAddButton()}>Test</button>
            </div>
        )
    } else {
        return(
            <div className="tasklist">
                {fetchedTasks.map(task => <Task task={task} />)}
                <button className="add btn" onClick={() => toggleAddButton()}>Test2</button>
            </div>
        )
    }
}

export default Tasks
