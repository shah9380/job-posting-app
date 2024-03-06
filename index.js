const express = require("express");
const jobRoutes = require("./routes/job")
const mongoose = require("mongoose")


const app = express();

const PORT = 5000;

mongoose.connect("mongodb://localhost:27017/jobapp")
.then(()=>{
    console.log("database connected successfully")
})
.catch(()=>{
    console.log("unable to connect")
})

// app.use(express.urlencoded(true))

// app.get("/",(req, res)=>{
//     res.send("Hi how are you")
// })
app.use(express.json())
app.use("/api/v1/job", jobRoutes);


app.listen(PORT,()=>{
    console.log("server is runnig at port:", PORT);
})