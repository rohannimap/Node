const express = require("express")
const router = express.Router()

const {createTodo} = require("../controllers/createTodo")
const {getTodo,getTodoById} = require("../controllers/getTodo")
const {updateTodo} = require("../controllers/updateTodo")



router.post("/createTodo",createTodo)
router.get("/getTodo",getTodo)
router.get("/getTodo/:id",getTodoById)
router.get("/updateTodo/:id",updateTodo)
router.get("/deleteTodo/:id",updateTodo)


module.exports = router;