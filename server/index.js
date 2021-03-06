import express from "express";
import todoRoutes from "./routes/todo.js"
import cors from "cors"

const app = express();
const PORT = 5000;

app.use(express.json())
app.use(cors())

app.get("/", (req, res) => {
    res.send("Up and running.")
})

//todo Routes
app.use("/todo", todoRoutes)

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}.`)
})
