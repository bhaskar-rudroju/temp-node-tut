// CommonJS - every file is module (by default)
// Modules - Encapsulated code
const {john, peter} = require('./4-names')
const sayHi = require('./5-utils')
const data = require('./6-alternate')
require('./7-mindgrenade')


console.log(data);

sayHi(john);
sayHi(peter);
