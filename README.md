# ![logomakr_3opzev](https://cloud.githubusercontent.com/assets/3071208/23041307/1e9bb0a4-f45a-11e6-9470-f8c55656f604.png)

[![Build Status](https://travis-ci.org/CodeInBrackets/From-A-Galaxy-Far-Away.svg?branch=master)](https://travis-ci.org/CodeInBrackets/From-A-Galaxy-Far-Away)

## Mission

 Convert unkown language to roman and be able to know their real value in arabic numbers.

## Run

### Using Docker

if you have docker install the project can be build by 
```
docker build -t galaxy .
```
after that it can be run by
```
docker run -a stdin -a stdout -i  galaxy
```

### Using Node

in a machine with node 6.x or higher run
```
npm install
```
after that it can run any of the next npm scripts
```
{
    "start": "node .",
    "start-dev": "nodemon .",
    "start-cmd": "node bin/cmd.js",
    "start-cmd-dev": "nodemon bin/cmd.js",
    "test": "tape test/**/*-test.js | faucet",
    "test-dev": "nodemon ./node_modules/tape/bin/tape test/**/*-test.js | faucet"
}
```

## Execution

the program accepts any of the next expressions, if you fail to comply with it you will get a message expresing that your phrase is not correct.
```
<word> is <Roman Number>
[words] is <number> Credits
how much is [words] ?
how many Credits is [words] <word> ?
reboot
exit
```

## Extra 

added this as a facebook chat bot deployed in heroku ... because seemed like a good idea

![screen shot 2017-02-16 at 15 07 28](https://cloud.githubusercontent.com/assets/3071208/23041216/bc0821c0-f459-11e6-8c5f-cb571c882b5c.png)

### Logo

People graphic by <a href="http://www.flaticon.com/authors/roundicons">Roundicons</a> from <a href="http://www.flaticon.com/">Flaticon</a> is licensed under <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0">CC BY 3.0</a>. Made with <a href="http://logomakr.com" title="Logo Maker">Logo Maker</a>
