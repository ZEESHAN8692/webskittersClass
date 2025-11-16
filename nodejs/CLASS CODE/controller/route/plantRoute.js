const express = require('express')
const router = express.Router()
const plantModel = require('../model/plantModel')

router.post("/create-plant", (req, res) => {
    try {
        const { name, price } = req.body;
        const plant = new plantModel({
            name,
            price
        })
        plant.save()
        res.json({
            status: "success",
            data: plant,
            message: "data added"
        })

    } catch (error) {
        console.log(error);

    }


})


router.get("/plants", async (req, res) => {
    try {
        const plantsData = await plantModel.aggregate([
            { $project: { __v: 0 } },

        ])
        const options = {
            page: 1,
            limit: 20
        }

        const plants = await plantModel.aggregatePaginate(plantsData, options)
        res.json({
            status: "success",
            data: plants,
            message: "Plants Fetched Successfully."
        })
    } catch (error) {
        console.log(error);

    }


})


module.exports = router