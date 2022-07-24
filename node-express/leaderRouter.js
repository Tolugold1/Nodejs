const express = require('express');
const bodyParser = require('body-parser');

const leaderRouter = express.Router();

leaderRouter.use(bodyParser.json());

leaderRouter.route('/')

.all((req, res, next) => {
   res.statusCode = 200;
   res.setHeader("Content-Type", "text/plain");
   next();
})

.get((req, res, next) => {
   res.end("Will send leader details to you shortly!!!");
})

.post((req, res, next) => {
   res.end("Posting your leader data to the database!");
})

.put((req, res, next) => {
   res.statusCode = 403;
   res.end("updating features for leader is disabled for the time being. We are sorry!!!")
})

.delete((req, res, next) => {
   res.end("Deleting all your leader data now...")
});

leaderRouter.route("/leader/:leaderId")

.all((req, res, next) => {
   res.statusCode = 200;
   res.setHeader("Content-Type", "text/plain");
   next();
})

.get((req, res, next) => {
   res.end("Will send leader details " + req.params.leaderId + " to you shortly!!!")
})

.post((req, res, next) => {
   res.write("Posting your leader data " + req.params.leaderId + " to the database! \n");
   res.end("Posting complete");
})

.put((req, res, next) => {
   res.write("Updating leader data on " + req.params.leaderId + " in the database!!!")
   res.end("Updating complete");
})

.delete((req, res, next) => {
   res.end("Deleting the data with id " + req.params.leaderId + " on the leader database");
})

module.exports = leaderRouter;