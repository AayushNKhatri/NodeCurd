import { Router } from "express";

import{
    createTask, getTask, updateTask, deleteTask
}from "../controllers/task.controller.js"
const router = Router()

router.post("/create", createTask)
router.put("/update/:id", updateTask)
router.get("/ViewTask/:id", getTask )
router.get("/ViewTask", getTask )
router.delete("/Delete/:id", deleteTask)

export default router