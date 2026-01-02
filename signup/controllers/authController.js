const User=require('../models/user')
const bcrypt=require('bcrypt')

exports.signUp=async(req,res)=>{
    try{
        const {firstname,lastname,email,gender,password}=req.body
        const existingUser=await User.findOne({email})
        if (existingUser){
            return res.status(400).json({message:"user alreandy exists"})
        }
        const hashedPassword=await bcrypt.hash(password,10)
        const newUser=new User({
            firstname,lastname,email,gender,password:hashedPassword
        })
        
        await newUser.save()
        res.status(201).json({message:'new user created'})
       
    }
    catch(err){
        console.log(err)
    }
}
exports.getUsers = async (req, res, next) => 
    { try { const users = await User.find({}, '-password'); 
    res.status(201).json(users)
    }
    catch(err){
        console.log(err)
}}

exports.patchUsers = async (req, res) => {
  try {
    const { id, ...updateData } = req.body; // Extract id and update fields

    // Update user by ID
    const user = await User.findByIdAndUpdate(id, updateData, { new: true });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json(user);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
};

