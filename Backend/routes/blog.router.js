const express = require("express")
const router = express.Router()
const blogController = require("../controller/blog.controller")

router.get("/getAllBlog", blogController.getAllBlog)
router.get("/getByIdBlog/:id", blogController.getByIdBlog)
router.post("/createBlog", blogController.createBlog)
router.put("/updateBlog/:id", blogController.updateBlog)
router.delete("/deleteBlog/:id", blogController.deleteBlog)


module.exports = router