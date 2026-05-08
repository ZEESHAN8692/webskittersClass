import express from "express"
import searchAndLimitController from "../controller/searchAndLimit.controller.js"
import OrderController from "../controller/OrderController.js"

const router = express.Router()

router.get("/", (req , res)=>{
    res.send("Hello Word")
})

router.post("/create-search-limit" , searchAndLimitController.CraeteSearchAndLimit)
router.get("/get-full-data", searchAndLimitController.getFullData)
// router.get("/get-full-data-with-limit", searchAndLimitController.getFullDataWithLimit)
router.get("/get-users" ,searchAndLimitController.getUsers)
router.get("/get-users-agg" ,searchAndLimitController.getUsersAgg)



// Order Rputes 

router.post("/create-order", OrderController.createOrder)
router.get("/get-orders", OrderController.getOrder)







export default router;