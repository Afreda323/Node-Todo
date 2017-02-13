const { MongoClient, ObjectID } = require('mongodb');

const obj = new ObjectID();

console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to mongo db');
    }
    console.log('Connected');
    db.collection('Todos').insertOne({
      text: 'Something to do',
      completed: false
    }, (err, result) => {
      if (err) {
        return console.log('Unable to insert', err);
      }
      console.log(JSON.stringify(result.ops, undefined, 2));
    });
    db.collection('Users').insertOne({
        name: 'Anthony Freda',
        age: 21,
        location: 'Charlotte, NC'
    }, (err, res) => {
        if (err) {
            return console.log('Unable to post', err);
        }
        console.log(JSON.stringify(res.ops[0]._id.getTimestamp(), undefined, 2));
    })
    db.close();
});
