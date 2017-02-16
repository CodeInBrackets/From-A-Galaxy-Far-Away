# From-A-Galaxy-Far-Away

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
[words] is <number> Credits$/
/^how much is [words] \?$/
/^how many Credits is [words] <word> \?$/
reboot
exit
```
