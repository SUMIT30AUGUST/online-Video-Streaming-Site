import express from 'express';
const app= express();

app.use(express.static("/public"))

app.get("/",(req,res)=>{
    res.send("Sumit rawat")
})


app.listen(3223,()=>console.log("server running at 3223"))
