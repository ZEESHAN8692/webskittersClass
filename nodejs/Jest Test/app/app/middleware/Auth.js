
const bcrypt=require('bcryptjs')
const jwt=require('jsonwebtoken')

const hashedPassword=async(password)=>{
    const salt=await bcrypt.genSalt(10);
    const hashed=await bcrypt.hash(password,salt);
    return hashed;
}

const comparePassword=async(password,hashedPassword)=>{
    return bcrypt.compare(password,hashedPassword)
}

const AuthCheck = async (req, res, next) => {
    const token = req.headers['authorization'];  // 'authorization' is case-insensitive
    if (!token) {
        return res.status(400).json({
            status: false,
            message: 'Token is required for authentication'
        });
    }
    
    // Remove 'Bearer ' from the token if it exists
    const bearerToken = token.split(' ')[1];  // Split and take the token part
    if (!bearerToken) {
        return res.status(400).json({
            status: false,
            message: 'Bearer token format is invalid'
        });
    }

    try {
        const decoded = jwt.verify(bearerToken, process.env.JWT_SECRET_KEY);
        req.user = decoded;
        // You can log the user information for debugging:
        // console.log('Authenticated user:', req.user);
    } catch (err) {
        return res.status(400).json({
            status: false,
            message: "Invalid token"
        });
    }

    return next();
};




module.exports= {hashedPassword,comparePassword, AuthCheck};