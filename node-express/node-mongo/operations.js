exports.postDocument = (db, document, collection) => {

   coll = db.collection(collection);
   return coll.insertOne(document);
}

exports.getDocument = (db, collection) => {

   coll = db.collection(collection);
   return coll.find({}).toArray();
}

exports.putDocument = (db, document, update, collection) => {

   coll = db.collection(collection);
   return coll.updateOne(document, {$set: update}, null)
}