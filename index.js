import express from 'express';
import path from 'path'
const app= express();

app.use(express.static(path.resolve("./public")))

// app.get("/",(req,res)=>{
//     res.sendFile(__dirname+'/public/index.html');
// })


app.listen(3223,()=>console.log("server running at 3223"))
