const jobsModel = require("../models/job")

const createJob = async (req, res)=>{
    console.log(req.body);
    const newJob = new jobsModel(req.body);
    newJob.save();
    res.json({
        success: true,
        message: "created a job successfully"
    })
}

//lisitng a job using get method
const getJob = async (req, res)=>{
    try {
        const data = await jobsModel.find({});
        res.json({
            success: true,
            message: "getting a job",
            results: data
        })
    } catch (error) {
        console.error(error);
        res.status(500).send(error);
    }
    
}

// updating a job
const updateJob = async (req, res)=>{

    // getting the job in body
    const job = new jobsModel({
        _id: req.params.id,
        title: req.body.title,
        description: req.body.description,
        company: req.body.company,
        location: req.body.location,
        salary: req.body.salary
    })
    // updating back the job
    try {
        await jobsModel.updateOne({_id: req.params.id}, job)
        res.status(201).json({
            message: 'jobposting has been updated'
        })
    } catch (error) {
        res.status(400).json({
            error: error
        })
    }
}

//deleting a job posting

const deletePosting = async (req, res)=>{
        try {
            await jobsModel.deleteOne({_id: req.params.id})
            res.status(202).json({
                message: "job has been deleted"
            })
        } catch (error) {
            res.status(204).json({
                error: error
            })
        }
}
module.exports = {
    createJob, 
    getJob,
    updateJob,
    deletePosting,
}