var Model = require('..');
var test = require('tape');
var cat;

test('setup and basic value test', function (t) {
    cat = Model({age: 11, name: 'Theodore'});
    t.ok(cat, '`cat` object is ok');
    t.equal(cat.get('age'), 11, 'Theodore is 11');
    t.equal(cat.get('name'), 'Theodore', 'Theodore\'s name is Theodore');
    t.end();
});

test('set test', function (t) {
    cat.set('age', 1);
    cat.set('color', 'brown');
    cat.set('something', true);
    
    t.equal(cat.get('age'), 1, 'Age should be 1');
    t.equal(cat.get('color'), 'brown', 'New color prop should be brown');
    t.equal(cat.get('something'), true, 'New something prop should be `true`');
    t.end();
});

test('seal test', function (t) {
    cat.seal();
    cat.set('age', 11);
    t.equal(cat.get('age'), 11, 'Age should be 11');

    var setYes = function () {
        cat.set('yes', 'no');
    };

    t.throws(setYes);

    t.end();
});
