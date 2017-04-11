require('./thrift');
require('./gen-js/tutorial_types');
require('./gen-js/shared_types');
require('./gen-js/SharedService');
require('./gen-js/Calculator');


var transport = new Thrift.Transport('http://localhost:9090/tutorial');
var protocol  = new Thrift.Protocol(transport);
var client    = new tutorial.CalculatorClient(protocol);


client.ping(function(err, response) {
  console.log('ping()');
});


client.add(1,1, function(response) {
  console.log("1+1=" + response);
});

work = new tutorial.Work();
work.op = tutorial.Operation.DIVIDE;
work.num1 = 1;
work.num2 = 0;

client.calculate(1, work, function(message) {
  if (message instanceof Error) {
    console.log("InvalidOperation " + message);
  } else {
    console.log('Whoa? You know how to divide by zero?');
  }
});

work.op = tutorial.Operation.SUBTRACT;
work.num1 = 15;
work.num2 = 10;

client.calculate(1, work, function(message) {
  console.log('15-10=' + message);

  client.getStruct(1, function(message){
    console.log('Check log: ' + message.value);
  });
});
