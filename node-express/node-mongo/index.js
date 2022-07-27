const MongoClient = require("mongodb").MongoClient;
const dbupper = require("./operations");

const url = "mongodb://localhost:27017/";
const dbName = "toluserver";

MongoClient.connect(url).then((client) => {

   console.log("Connection successful");

   const db = client.db(dbName);
   dbupper.postDocument(db, {name: "bekky", description: "Deputy governor"}, 'dishes')
   .then((result) => {
      console.log("Inserting documents \n", result.ops);

      return dbupper.getDocument(db, 'dishes')
   })
   .then((result) => {
      console.log("Found document: \n", result);

      return dbupper.putDocument(db, {name: "bekky"}, {description: "Governor"}, 'dishes')
   })
   .then((result) => {
         console.log("Updating document", result.result);

         return dbupper.getDocument(db, 'dishes')
   })
   .then((result) => {
      console.log("Found updated document: \n", result);

      return db.dropCollection('dishes')
   })
   .then((result) => {
      console.log("Deletion successful", result);

      client.close();
   })
   .catch((err) => console.log(err));
})
.catch((err) => console.log(err));