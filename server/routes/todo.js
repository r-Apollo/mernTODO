import express from "express";
import { addTodo, getAllTasks } from "../controller/todo.js";

const router = express.Router();

//GET REQUESTS
router.get("/", getAllTasks)

//POST REQUESTS
router.post("/", addTodo)

export default router;
