const mongoose = require("mongoose");

const jobSchema = {
    title: {
        type: String,
    },
    description: {
        type: String
    },
    company: {
        type: String,
    },
    location: {
        type: String,
    },
     salary: {
        type: Number,
     }
}

//mongoose will create a ccollection if it's not there if it's there we can directly insert dats;
    2
const jobModel =  mongoose.model("jobs", jobSchema)
module.exports = jobModel;

//username: shah54
//password: fMHEeWbBmjCCuRKi
// mongodb+srv://shah54:<password>@atlascluster.5yoiztc.mongodb.net/
// mongodb+srv://shah54:fMHEeWbBmjCCuRKi@atlascluster.5yoiztc.mongodb.net/