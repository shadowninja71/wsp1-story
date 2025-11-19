import express from "express"
import fs from "fs"
const router = express.Router()
const storyData = JSON.parse(fs.readFileSync("./story/story.json", "utf-8"))
const findpage = (id) => {
    return storyData.find(page => page.id === id)
}

router.get("/", (req, res) => {
    res.render("story.njk", {
        title: "här börjar dit äventyr.",
        message: "Välkommen till din berättelse! du kommer att göra val som formar din resa."
    })
})

router.get("/:id", (req, res) => {
    const id = req.params.id
    const page = findpage(id)
    

    res.render("storys.njk", {
        page
        
    })
})

export default router