var interpret = require('../lib/conversation')
var readlineLib = require('readline');
var readline = readlineLib.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

readline.on('line', function(line){
    if(line === `exit`) 
        process.exit() 
    var resultInterpret = interpret(line)
    if(resultInterpret)
        console.log(resultInterpret)
})

console.log('in a galaxy far far away...')