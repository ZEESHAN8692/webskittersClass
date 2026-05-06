import express from "express"
import searchAndLimitController from "../controller/searchAndLimit.controller.js"

const router = express.Router()

router.get("/", (req , res)=>{
    res.send("Hello Word")
})

router.post("/create-search-limit" , searchAndLimitController.CraeteSearchAndLimit)
router.get("/get-full-data", searchAndLimitController.getFullData)
// router.get("/get-full-data-with-limit", searchAndLimitController.getFullDataWithLimit)
router.get("/get-users" ,searchAndLimitController.getUsers)

export default router;