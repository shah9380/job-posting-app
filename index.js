const express = require("express");
const jobRoutes = require("./routes/job")
const mongoose = require("mongoose")


const app = express();

const PORT = 10000;

mongoose.connect("mongodb+srv://shah54:fMHEeWbBmjCCuRKi@atlascluster.5yoiztc.mongodb.net/")
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