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


//adds a Task to the DB
export const addTodo = async (req, res) => {
    const todo = new TodoModel({
        taskName: req.body.name,
        taskDone: false,
    })
    await todo.save()
    res.send("Succes")
}


//delets task from db
export const deleteTodo = async (req, res) => {
    await TodoModel.deleteOne({
        _id:req.body._id
    })
    res.send("Succes")
} 
