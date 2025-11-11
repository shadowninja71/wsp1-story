import express from "express"
const router = express.Router()

router.get("/", (req, res) => {
    res.render("index.njk", {
        title: "Hej du kommer att förlja med mig i min resa",
        message: "Du kommer att få följa med i min version av tristan och isolde"
    })
})

export default router