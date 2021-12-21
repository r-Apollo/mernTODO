import React, { useEffect, useState } from "react";
import Axios from "axios";
import Task from "./Task";
import "../styles/tasks.css"

const Tasks = () => {
    const [fetchedTasks, updateFetchedTasks] = useState([]);
    const [addActivated, setAddActivated] = useState(false);
    const [inputedTask, setInputedTask] = useState("");

    //fetching data from the server
    const fetchTasks = async () => {
        const res = await Axios.get("http://localhost:5000/todo")
        updateFetchedTasks(res.data)
    }

    //adding task to the db
    const addTask = async () => {
        if (inputedTask !== "") {
            await Axios.post("http://localhost:5000/todo", {
                name: inputedTask,
            })
            fetchTasks()
            toggleAddButton()
            setInputedTask("")
        } else {
            alert("Taskname is not allowed to be empty.")
        }
    }

    //removing task from the db
    const deleteTask = async (_id) => {
        await Axios.delete("http://localhost:5000/todo", {
            data:{
                _id:_id
            }
        })
        fetchTasks()
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
                {fetchedTasks.map(task => <Task task={task} deleteTask={deleteTask} key={task._id} />)}
                <button className="add btn" onClick={() => toggleAddButton()}>
                    <div>
                        <i className="fas fa-plus"></i>
                        Add task
                    </div>
                </button>
            </div>
        )
    } else {
        return(
            <div className="tasklist">
                {fetchedTasks.map(task => <Task task={task} key={task._id} deleteTask={deleteTask} />)}
                <div className="adding">
                    <input type="text" placeholder="Task name" className="input" onChange={(event) => setInputedTask(event.target.value)}></input>
                    <div className="controlls">
                        <button className="btn addTask" onClick={() => addTask()}>Add</button>
                        <button className="btn cancel" onClick={() => toggleAddButton()}>Cancel</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Tasks
