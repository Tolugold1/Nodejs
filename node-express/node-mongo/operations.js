const assert = require("assert");

exports.postDocument = (db, document, collection, callback) => {

   const coll = db.collection(collection);
   coll.insert(document, (err, result) => {
      assert.equal(err, null);

      console.log("Inserted " + result.result.n + " documents into the collection " + collection);

      callback(result);
   })
};

exports.getDocument = (db, collection, callback) => {

   const coll = db.collection(collection);
   coll.find({}).toArray((err, result) => {
      assert.equal(err, null);

      callback(result);
   })
};

exports.putDocument = (db, document, update, collection, callback) => {

   const coll = db.collection(collection);
   coll.updateOne(document, {$set: update}, null, (err, result) => {
      assert.equal(err, null);
      console.log("Updated the document with ", update);
      callback(result);
   })
};

exports.deleteDocument = (db, document, collection, callback) => {

   const coll = db.collection(collection);
   coll.deleteOne(document, (err, result) => {
      assert.equal(err, null);
      console.log("Removed the selected document ", document);
      callback(result);
   })
};