const lodash = require('lodash');

const user = [
    {'user': 'barney', 'age': 36, 'active': true},
    {'user': 'fred', 'age': 40, 'active': false}
];

console.log(_.filter(users,'active'));