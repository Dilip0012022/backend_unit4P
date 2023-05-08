const express=require("express")
const {connection}=require("./db")
const cors=require("cors")
const {userRouter}=require("./routes/user.routes")

const app=express()
app.use(cors)
app.use(express.json())
app.get("/",(req,res)=>{
    res.send("Done")
})
app.use("/users",userRouter)

app.listen(8080,async()=>{
    try{
        await connection
        console.log("Connected to db")
    }catch(err){
        console.log(err)
        console.log("Connot connect with db")
    }
    console.log("Server is running at 8080...")
})
