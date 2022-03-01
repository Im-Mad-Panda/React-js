const _ = require('lodash');
const {mySum} = require('./Component.js')

const users = [
    {'user': 'barney', 'age': 36, 'active': true},
    {'user': 'fred', 'age': 40, 'active': false}
];

console.log('INDEX FILE START');
console.log(_.filter(users,'active'));
console.log(_.random());

console.log(mySum(2,2));
console.log('INDEX FILE END');