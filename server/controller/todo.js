import mongoose from "mongoose";
import TodoModel from "../modules/Todo.js"
import dotenv from "dotenv";


//Initializing .env
dotenv.config()

//CONNCT TO DB
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser:true,
})

//Checks if this branch is running.
export const checkRoute = (req, res) => res.send("Working")


//adds a Task to the DB
export const addTodo = async (req, res) => {
    const todo = new TodoModel({
        taskName: req.body.name,
        taskDone: false,
    })
    await todo.save()
    res.send("Succes")
}
