import app from "./app.js";
import dotenv from "dotenv"
import { PORT } from "./src/config/server.js";
import { seeding } from "./src/seed/seeding.js";
dotenv.config()
app.listen(PORT, async () => {
    try {
        await seeding()
        console.log(`the server is running at port ${PORT}`)
    }
    catch (error) {
        console.log(error)
        process.exit(1)
    }
})