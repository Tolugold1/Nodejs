const MongoClient = require("mongodb").MongoClient;
const assert = require("assert");
const dbupper = require("./operations");

const url = "mongodb://localhost:27017/";
const dbName = "toluserver";

MongoClient.connect(url, (err, client) => {
   assert.equal(err, null);

   console.log("Connection successful");

   const db = client.db(dbName);
   dbupper.postDocument(db, {name: "bekky", description: "Deputy governor"}, 'dishes', (result) => {
      console.log("Inserting documents \n", result.ops);

      dbupper.getDocument(db, 'dishes', (result) => {
         console.log("Found document: \n", result);

         dbupper.putDocument(db, {name: "bekky"}, {description: "Governor"}, 'dishes', (result) => {
            console.log("Updating document", result.result);

            dbupper.getDocument(db, 'dishes', (result) => {
               console.log("Found updated document: \n", result);

               db.dropCollection('dishes', (result) => {
                  console.log("Deletion successful", result);

                  client.close();
               })
            })
         })
      })
   })

})