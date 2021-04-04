const express=require("express")
const post = require("./post")

const app = express()

const port = 7000;

app.get("/", (req,res)=>{
    res.send("welcome to my api")
})
app.post("/api/start", (req,res)=>{
    res.send(post)
})
app.delete("/api/delete", (req,res)=>{
    res.send("remove the mistake that you have made")
})
app.put("/api/put", (req,res)=>{
    res.send("thank you Mr.Awudu")
})


app.listen(port, ()=>console.log(`server started ${port}`));