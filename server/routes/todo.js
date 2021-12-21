import express from "express";
import { addTodo, getAllTasks, deleteTodo } from "../controller/todo.js";

const router = express.Router();

//GET REQUESTS
router.get("/", getAllTasks)

//POST REQUESTS
router.post("/", addTodo)

//DELETE REQUESTS
router.delete("/", deleteTodo)

export default router;
