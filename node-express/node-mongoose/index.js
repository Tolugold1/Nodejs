const mongoose = require("mongoose");
const Dishes = require('./Model/dishes');

const url = "mongodb://localhost:27017/toluserver";

const connect = mongoose.connect(url);

connect.then((db) => {
   console.log("Connection successful");

   Dishes.create({
      name: "Uthappizza",
      description: "Testing schema"
   })
   .then((dish) => {
      console.log(dish);

      return Dishes.findByIdAndUpdate(dish._id, { $set: { description: "Updated text"}}, {new: true}).exec();
   })
   .then((dishes) => {
      console.log(dishes);

      dishes.comment.push({
         rating: 2,
         comment: "I\'m so happy to know mongodb.",
         author: "Tolulope Adeleke"
      })
      return dishes.save();
   })
   .then((dishes) => {
      console.log(dishes);

      return Dishes.deleteOne({});
   })
   .then((dishes) => {
      console.log(dishes);

      return Dishes.find({});
   })
   .then((dishes) => {
      console.log(dishes);

      return mongoose.connection.close()
   })
   .catch((err) => console.log(err));

})
.catch((err) => console.log(err));