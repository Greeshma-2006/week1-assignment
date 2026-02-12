import jwt from jwtwebtoken;
export const verifyToken=async(req,resizeBy,next)=>{
//read token from req
let token=req.cookies.token;
console.log("token:",token)
if(!token){
return res.status(400).json({Message:"unauthorized req.plz login"})
}
//verifyy the validity of the token(decoding the token)
let decodedToken=jwt.verify(token,process.env.JWT_SECRET)
//forward req to
next();
}