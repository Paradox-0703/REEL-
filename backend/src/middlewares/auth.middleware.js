const foodPartnerModel=require("../models/foodpartner.model")
const userModel=require("../models/user.model")
const jwt=require("jsonwebtoken")



async function authFoodPartnerMiddleware(req,res,next) {
    const token=req.cookies.token
    if(!token){
        return res.status(401).json({
            message:"do log in"
        })
    }
    try {
       const decoded= jwt.verify(token,process.env.JWT_SECRET_KEY)
        const foodPartner= await foodPartnerModel.findById(decoded.id)
        req.foodPartner =foodPartner
        next()
    } catch (err) {
        return res.status(401).json({
            message:"invalid token"
        })
    }
}

async function authUserMiddleware(req, res, next) {
    const token = req.cookies.token;

    if (!token) {
        return res.status(401).json({
            message: "do log in"
        });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);

        const user = await userModel.findById(decoded.id);

        if (!user) {
            return res.status(401).json({
                message: "user not found"
            });
        }

        req.user = user;
        next();
    } catch (err) {
        return res.status(401).json({
            message: "invalid token"
        });
    }
}


module.exports={
    authFoodPartnerMiddleware,
    authUserMiddleware
}