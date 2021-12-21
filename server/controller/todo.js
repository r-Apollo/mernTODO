import mongoose from "mongoose";
import TodoModel from "../modules/Todo.js"
import dotenv from "dotenv";


//Initializing .env
dotenv.config()

//CONNCT TO DB
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser:true,
})

//gets tasks from the DB
export const getAllTasks = async (req, res) => {
    res.send(await TodoModel.find({}))
}

export const getUnfinishedTasks = async (req, res) => {
    res.send(await TodoModel.find({
        taskDone:false,
    }))
}

export const getFinishedTasks = async (req, res) => {
    res.send(await TodoModel.find({
        taskDone:true,
    }))
}


//adds a task to the DB
export const addTodo = async (req, res) => {
    const todo = new TodoModel({
        taskName: req.body.name,
        taskDone: false,
    })
    await todo.save()
    res.send("Succes")
}


//updates the taskDone to true.
export const updateTaskDone = async (req, res) => {
    const doc = await TodoModel.findOne({
        _id:req.body._id
    })
    await doc.updateOne({taskDone:true})
    res.send(await TodoModel.findOne({
        _id:req.body._id
    }))
}

//updares the taskDone to false
export const updateTaskNotDone = async (req, res) => {
    const doc = await TodoModel.findOne({
        _id:req.body._id
    })
    await doc.updateOne({taskDone:false})
    res.send(await TodoModel.findOne({
        _id:req.body._id
    }))
}

//updates the taskName
export const updateTaskName = async (req, res) => {
    const doc = await TodoModel.findOne({
        _id:req.body._id,
    })
    await doc.updateOne({
        taskName:req.body.taskName,
    })
    res.send(await TodoModel.findOne({
        _id:req.body._id
    }))
}


//delets task from db
export const deleteTodo = async (req, res) => {
    await TodoModel.deleteOne({
        _id:req.body._id
    })
    res.send("Succes")
} 
