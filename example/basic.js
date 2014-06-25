var Model = require('..');
var cat = Model({age: 11, name: 'Theodore'});

console.log('age: ', cat.get('age'));
