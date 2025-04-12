const express = require("express")
const router = express.Router();


const notesRoute = require("../controllers/notes")

router.post("/",notesRoute.createNote)
router.get("/",notesRoute.getAllNotes)
router.get("/:id",notesRoute.getByIdNote)
router.put("/:id",notesRoute.updateNote)
router.delete("/:id",notesRoute.deleteNote)



module.exports = router