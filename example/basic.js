var Model = require('..');
var cat = Model({age: 11, name: 'Theodore'});

console.log('age: ', cat.get('age'));

cat.set('age', 1);
cat.set('color', 'brown');
cat.set('something', true);
console.log('age: ', cat.get('age'));
console.log('color: ', cat.get('color'));
console.log('something: ', cat.get('something'));

cat.seal();
cat.set('age', 11);
cat.set('yes', 'no');
console.log('age: ', cat.get('age'));
console.log('yes: ', cat.get('yes'));
