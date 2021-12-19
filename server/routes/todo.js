import express from "express";
import { checkRoute, addTodo } from "../controller/todo.js";

const router = express.Router();

//GET REQUESTS
router.get("/", checkRoute)

//POST REQUESTS
router.post("/", addTodo)

export default router;
