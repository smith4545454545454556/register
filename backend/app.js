import express from "express"
import { router as UserRouter } from "./src/routes/user.js"
import cors from "cors"
const corsOptions = {
    origin: "http://localhost:5173",
    optionsSuccessStatus: 200
}
const app = express()
app.use(express.json())
app.use(cors(corsOptions))
app.use("/api", UserRouter)
export default app