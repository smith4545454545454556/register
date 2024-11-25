import { Router } from "express";
import * as UserController from "../controller/user.js"
import upload from "../multer/multer.js";
export const router = Router()
router.post("/register", upload.single("profile"), UserController.register)
router.post("/login", UserController.login)
router.get("/login", (req, res) => {
    res.send("register")
})