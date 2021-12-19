import mongoose from "mongoose"

const TodoSchema = new mongoose.Schema({
    taskName: {
        type:String,
        required:true,
    },
    taskDone: {
        type:Boolean,
        required:true,
    }
})

const TodoModel = mongoose.model("todos", TodoSchema)

export default TodoModel
