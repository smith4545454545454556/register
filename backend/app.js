import express from "express"
import { router as UserRouter } from "./src/routes/user.js"
import cors from "cors"
const corsOptions = {
    origin: "https://register-frontend-n2tm.onrender.com",
    optionsSuccessStatus: 200
}
const app = express()
app.use(express.json())
app.use(cors(corsOptions))
app.get("/", (req, res) => {
    res.send("hello")
})
app.use(UserRouter)
export default app