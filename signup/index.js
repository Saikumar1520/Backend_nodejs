const express=require('express')
const connectDB=require('./config/db')
const authRoutes=require('./routes/authRoutes')
const errorHandler=require('./middleware/errorHandler')
const bodyParser=require('body-parser')
const app=express()

const PORT=8000

app.use(bodyParser.json())

connectDB()

app.use('/api/auth',authRoutes)
app.use(errorHandler)

app.listen(PORT,()=>console.log(`server started at ${PORT}`))

