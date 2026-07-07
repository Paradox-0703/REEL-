const userModel= require("../models/user.model")
const foodPartnerModel= require("../models/foodpartner.model")
const bcrypt = require("bcryptjs");
const jwt=require("jsonwebtoken")

async function registerUser(req,res){
    const {fullName,email,password}=req.body

    const isUserAlreadyExist= await userModel.findOne(
        {email}
    )
    if(isUserAlreadyExist){
        return res.status(400).json({
            message:"User already exists"
        })
    }
    const hashedPassword=await bcrypt.hash(password,10)

    const user=await userModel.create({
        fullName,
        email,
        password: hashedPassword
    })

    const token=jwt.sign({
        id:user._id,
    },process.env.JWT_SECRET_KEY)

    res.cookie("token",token)

    res.status(201).json({
        message:"user registerd",
        user:{
            user: user.fullName,
            email:user.email
        }
    })
}

async function loginUser(req,res) {
    const{email,password}=req.body
    const user=await userModel.findOne({
        email
    })
    if(!user){
        return res.status(400).json({
            message:"Invalid email or password"
        })
    }
    const isPassWordValid= await bcrypt.compare(password,user.password)
    if(!isPassWordValid){
        return res.status(400).json({
            message:"Invalid email or password"
        })
    }
    const token=jwt.sign({
        id:user._id,
    },process.env.JWT_SECRET_KEY)

    res.cookie("token",token)
    res.status(200).json({
        message:"logged in successfully",
        user:{
            user: user.fullName,
            email:user.email
        }
    })
}
async function logoutUser(req,res) {
    res.clearCookie("token")
    res.status(200).json({
        message:"user logged out"
    })
}
async function registerFoodPartner(req,res){
    const {name,email,password}=req.body

    const isAccountAlreadyExist= await foodPartnerModel.findOne(
        {email}
    )
    if(isAccountAlreadyExist){
        return res.status(400).json({
            message:"Foodpartner already exists"
        })
    }
    const hashedPassword=await bcrypt.hash(password,10)

    const foodPartner=await foodPartnerModel.create({
        name,
        email,
        password: hashedPassword
    })

    const token=jwt.sign({
        id:foodPartner._id,
    },process.env.JWT_SECRET_KEY)

    res.cookie("token",token)

    res.status(201).json({
        message:"Foodpartner registerd",
        Foodpartner:{
            name: foodPartner.name,
            email:foodPartner.email
        }
    })
}
async function loginFoodPartner(req,res) {
    const{email,password}=req.body
    const user=await foodPartnerModel.findOne({
        email
    })
    if(!user){
        return res.status(400).json({
            message:"Invalid email or password"
        })
    }
    const isPassWordValid= await bcrypt.compare(password,user.password)
    if(!isPassWordValid){
        return res.status(400).json({
            message:"Invalid email or password"
        })
    }
    const token=jwt.sign({
        id:user._id,
    },process.env.JWT_SECRET_KEY)

    res.cookie("token",token)
    res.status(200).json({
        message:"logged in successfully",
        user:{
            user: user.name,
            email:user.email
        }
    })
}
async function logoutFoodPartner(req,res) {
    res.clearCookie("token")
    res.status(200).json({
        message:"foodpartner logged out"
    })
}

module.exports={registerUser,loginUser,logoutUser,registerFoodPartner,loginFoodPartner,logoutFoodPartner}