const mongoose=require('mongoose')

const connectDB=async()=>{
    try{
        await mongoose.connect("mongodb+srv://noobiemini987_db_user:zM4EJfp2vd08j7IU@cluster0.kh07sfy.mongodb.net/")
    ,
    console.log('connected to mongodb')}
    catch(err){
        console.log(err)
    }
}

module.exports=connectDB