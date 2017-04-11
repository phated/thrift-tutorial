'use strict';

var parser = require('thrift-parser');

var fs = require('fs');

var ast = parser(fs.readFileSync('./tutorial.thrift'));

console.log(ast);
