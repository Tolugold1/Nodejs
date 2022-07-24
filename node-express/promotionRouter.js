const express = require('express');
const bodyParser = require('body-parser');

const promotionRouter = express.Router();

promotionRouter.use(bodyParser.json());

promotionRouter.route('/')

.all((req, res, next) => {
   res.statusCode = 200;
   res.setHeader("Content-Type", "text/plain");
   next();
})

.get((req, res, next) => {
   res.end("Will send promotion details to you shortly!!!");
})

.post((req, res, next) => {
   res.end("Posting your promotion data to the database!");
})

.put((req, res, next) => {
   res.statusCode = 403;
   res.end("updating features for promotion is disabled for the time being. We are sorry!!!")
})

.delete((req, res, next) => {
   res.end("Deleting all your promotion data now...")
});

promotionRouter.route("/promotion/:promoId")

.all((req, res, next) => {
   res.statusCode = 200;
   res.setHeader("Content-Type", "text/plain");
   next();
})

.get((req, res, next) => {
   res.end("Will send promotion details " + req.params.promoId + " to you shortly!!!")
})

.post((req, res, next) => {
   res.write("Posting your promotion data " + req.params.promoId + " to the database! \n");
   res.end("Posting complete");
})

.put((req, res, next) => {
   res.write("Updating promotion data on " + req.params.promoId + " in the database!!!")
   res.end("Updating complete");
})

.delete((req, res, next) => {
   res.end("Deleting the data with id " + req.params.promoId + " on the promotion database");
})

module.exports = promotionRouter;