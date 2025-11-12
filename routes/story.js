import express from "express"
const router = express.Router()

router.get("/", (req, res) => {
    res.render("story.njk", {
        title: "här börjar dit äventyr.",
        message: "Välkommen till din berättelse! du kommer att göra val som formar din resa."
    })
})

export default router