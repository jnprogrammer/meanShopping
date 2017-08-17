var _ = require('underscore');
_.each([1,2,3], function(v){
    console.log(v);
});

var mongodb = require('mongodb');

var uri = 'mongodb://localhost:27017/example';

mongodb.MongoClient.connect(uri, function(err,db){
    if(err){
        console.log(err);
        process.exit(1);
    }

    db.collection('sample').insert({x:1}, function(err,result){
        if(err) {
          console.log(err);
          process.exit(1);
        }
    })

    db.collection('sample').find().toArray(function(err,docs){
        console.log(err);
       // process.exit(1);
    });

    console.log('Found docs:');
    docs.foreach(function(doc){
        console.log(JSON.stringify(doc));
    });
    //process.exit(0);
});