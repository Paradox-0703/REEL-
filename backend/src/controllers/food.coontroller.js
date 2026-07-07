const foodModel = require('../models/food.model')
const storageService = require("../services/storage.service")
const { v4: uuid } = require("uuid")

async function createFood(req, res) {
    console.log(req.file)
    const fileUploadResult = await storageService.uploadFile(req.file.buffer.toString('base64'), uuid())
    const foodItem= await foodModel.create({
        name: req.body.name,
        video: fileUploadResult.url,
        description: req.body.description,
        foodPartner:req.foodPartner._id,
    })
    res.status(201).json({
        message:"food created",
        foodItem
    })
}
async function getFoodItems(req,res){
const foodItems=await foodModel.find({})
res.status(200).json({
    message:"Fooditem fetched successfully",
    foodItems
})
}



module.exports = {
    createFood,
    getFoodItems
}