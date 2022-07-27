const mongoose = require("mongoose");
const Dishes = require('./Model/dishes');

const url = "mongodb://localhost:27017/toluserver";

const connect = mongoose.connect(url);

connect.then((db) => {
   console.log("Connection successful");

   var anotherDish = Dishes({
      name: "Uthappizza",
      description: "Testing schema"
   })
   anotherDish.save()
      .then((dish) => {
         console.log(dish);

         return Dishes.find({});
      })
      .then((dishes) => {
         console.log(dishes);

         return Dishes.updateOne({description: "Testing schema"}, {description: "Test test"}, {new: true})
      })
      .then((dishes) => {
         console.log(dishes);

         return Dishes.find({});
      })
      .then((dishes) => {
         console.log(dishes);

         return Dishes.deleteOne({});
      })
      .then((dishes) => {
         console.log(dishes);

         return mongoose.connection.close()
      })
      .catch((err) => console.log(err));

})
.catch((err) => console.log(err));