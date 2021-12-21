import express from "express";
import { addTodo, getAllTasks, deleteTodo, updateTaskDone, updateTaskNotDone, getUnfinishedTasks, getFinishedTasks, updateTaskName } from "../controller/todo.js";

const router = express.Router();

//GET REQUESTS
router.get("/", getAllTasks)

router.get("/unfinished", getUnfinishedTasks)

router.get("/finished", getFinishedTasks)

//POST REQUESTS
router.post("/", addTodo)

//UPDATE REQUESTS
router.patch("/done", updateTaskDone)
router.patch("/!done", updateTaskNotDone)

router.patch("/update/taskname", updateTaskName)

//DELETE REQUESTS
router.delete("/", deleteTodo)

export default router;
