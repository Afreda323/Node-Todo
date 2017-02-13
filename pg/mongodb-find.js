const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to mongo db');
    }
    // db.collection('Todos').find({
    //   _id: new ObjectID('58a20bcda9ad930d22f243a9')
    // }).toArray().then((docs) => {
    //   console.log('Todos');
    //   console.log(JSON.stringify(docs, undefined, 2));
    // }, (err)=>{
    //   console.log('Unable to connect', err);
    // });
    db.collection('Users').find().count().then((count) => {
      console.log(`Users: ${count}`);
    }, (err)=>{
      console.log('Unable to connect', err);
    });

    db.collection('Users').find({
      name: 'Anthony Freda'
    }).toArray().then((count) => {
      console.log('YEEEEEEE');
      console.log(JSON.stringify(count, undefined, 2));
    }, (err) => {
      console.log('Unable to connect');
    });
    // db.close();
});
