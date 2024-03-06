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