import Axios from "axios";
import React, { useEffect, useState } from "react";
import FinishedTask from "./FinishedTask";

const UnfinishedTasks = () => {
    const [fetchedTasks, setFetchedTasks] = useState([])

    const fetchFinishedTasks = async () => {
        const res = await Axios.get("http://localhost:5000/todo/finished")
        setFetchedTasks(res.data)
    }

    const unfinishTask = async (_id) => {
        await Axios.patch("http://localhost:5000/todo/!done", {
            _id:_id
        })
        fetchFinishedTasks()
    }

    //removing task from the db
    const deleteTask = async (_id) => {
        await Axios.delete("http://localhost:5000/todo", {
            data:{
                _id:_id
            }
        })
        fetchFinishedTasks()
    }

    useEffect(() => {fetchFinishedTasks()}, [])

    useEffect(() => {}, [fetchedTasks])

    return(
        <div className="tasklist">
            {fetchedTasks.map(task => <FinishedTask task={task} key={task._id} deleteTask={deleteTask} unfinishTask={unfinishTask} />)}
        </div>
    )
}

export default UnfinishedTasks
