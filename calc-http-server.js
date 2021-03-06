var Calculator = require("./gen-nodejs/Calculator");
var ttypes = require("./gen-nodejs/tutorial_types");
var SharedStruct = require("./gen-nodejs/shared_types").SharedStruct;

var bodyParser = require('body-parser');
var cors = require('cors');
var express = require('express');
var thriftExpress = require('thrift-server-express').thriftExpress;

process.on('unhandledRejection', console.log)

var data = {};

var handlers = {
  ping: function() {
    console.log("ping()");
  },

  add: function(n1, n2) {
    console.log("add(", n1, ",", n2, ")");
    return n1 + n2
  },

  calculate: function(logid, work) {
    console.log("calculate(", logid, ",", work, ")");

    var val = 0;
    if (work.op == ttypes.Operation.ADD) {
      val = work.num1 + work.num2;
    } else if (work.op === ttypes.Operation.SUBTRACT) {
      val = work.num1 - work.num2;
    } else if (work.op === ttypes.Operation.MULTIPLY) {
      val = work.num1 * work.num2;
    } else if (work.op === ttypes.Operation.DIVIDE) {
      if (work.num2 === 0) {
        var x = new ttypes.InvalidOperation();
        x.whatOp = work.op;
        x.why = 'Cannot divide by 0';
        throw x;
      }
      val = work.num1 / work.num2;
    } else {
      var x = new ttypes.InvalidOperation();
      x.whatOp = work.op;
      x.why = 'Invalid operation';
      throw x;
    }

    var entry = new SharedStruct();
    entry.key = logid;
    entry.value = ""+val;
    data[logid] = entry;

    return val
  },

  getStruct: function(key) {
    console.log("getStruct(", key, ")");
    return data[key]
  },

  zip: function() {
    console.log("zip()");
    return null;
  }
}

var app = express();

app.use('/tutorial', cors(), thriftExpress(Calculator, handlers));

app.listen(9090);

