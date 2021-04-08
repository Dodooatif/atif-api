const express=require("express")
const staffs = require("./staff")

const app = express()

app.use(express.json());
app.use(express.urlencoded({extended: false}));

const port = 7000;

app.get("/", (req,res)=>{
    res.send("welcome to my api")
})

//get all staffs
app.get("/api/fashion", (req,res)=>{
    res.json(staffs)
})

//select a staff
app.get("/api/fashion/:id", (req,res)=>{
    const id = req.params.id;
    const staff = staffs.some((s)=> s.id === id);

    if (staff) {
        res.json(staffs.filter((staff)=> staff.id === id));
    } else {
        res.status(404).json({message: "not found"});
    }
})

//add a staff
app.post("/api/fashion", (req,res)=>{
    const news = {
        name: req.body.name,
        gender: req.body.gender,
        email: req.body.email,
        id: req.body.id
    };
    staffs.push(news);
    res.json(staffs);
})

//delete a staff
app.delete("/api/fashion/:id", (req,res)=>{

    const id = req.params.id;
    const staff = staffs.some((s)=> s.id === id);

    if (staff) {
        res.json({
            msg: `Staff deleted ${id}`,
            staffs: staffs.filter((s)=>s.id !== id)
        })
    }
        
    
}),

//update a staff
app.put("/api/fashion/:name", (req,res)=> {
    const staffFound = staff.some((staff)=>staff.name === req.params.name);
    staffFound &&
        staff.forEach((staff)=> {
            staff.name === req.params.name &&
            (
            staff.name = req.body.name,
            staff.gender = req.body.gender, 
            staff.email = req.body.email,
            staff.id = req.body.id
            )
            res.json(staffs)
        })

})


app.listen(port, ()=>console.log(`server started ${port}`))