const router = require("express").Router();
const jobController = require("../controllers/jobController");
const { verifyAndAuthorization, verifyToken, verifyAndAdmin } = require("../middleware/verifyToken")

 // POST JOB
 router.post("/", verifyAndAdmin, jobController.createJob);

 // UPDATE JOB
 router.put("/:id", verifyAndAdmin, jobController.updateJob);

 //DELETE Job
 router.delete("/:id", verifyAndAdmin, jobController.deleteJob);

 //GET JOB
 router.get("/:id", jobController.getJob);

 router.get("/", jobController.getAllJobs);

 //SEARCH Job
 router.get("/search/:key", jobController.searchJobs);

 module.exports = router