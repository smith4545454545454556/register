import express from "express"
import { router as UserRouter } from "./src/routes/user.js"
import cors from "cors"
const corsOptions = {
    origin: "https://register-frontend-n2tm.onrender.com", // Allow your frontend
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],  // Allowed HTTP methods
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,              // Allow sending cookies or Authorization header
    // Allowed headers
    optionsSuccessStatus: 200,
};
const app = express()
app.use(cors(corsOptions))

app.options("*", cors(corsOptions));
app.use(express.json())

app.get("/", (req, res) => {
    res.send("hello")
})
app.use(UserRouter)
export default app