
const express=require('express')
const {signUp,getUsers,patchUsers}=require('../controllers/authController')

const router=express.Router()

router.post('/signup',signUp)
router.get('/users', getUsers);
router.patch('/users/:id',patchUsers)
module.exports=router