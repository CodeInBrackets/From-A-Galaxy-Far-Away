var express = require('express')
var bodyParser = require('body-parser')
var request = require('request')
var app = express()

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.listen((process.env.PORT || 3000))

app.get('/', function (req, res) {
    res.send('This is TestBot Server')
})

app.get('/webhook', function (req, res) {
    if (req.query['hub.verify_token'] === process.env.VERIFY_TOKEN)
        res.send(req.query['hub.challenge'])
    else
        res.send('Invalid verify token')
})

app.post('/webhook', function (req, res) {
    var events = req.body.entry[0].messaging
    for (var i = 0; i < events.length; i++) {
        var event = events[i]
        if (event.message && event.message.text) {
            analizeMessage(event, event.message)
        }
    }
    res.sendStatus(200)
})

function analizeMessage(event, message) {
    var response = { text: "" }
    response.text = interpret(message.text) || 'anything else...'
    sendMessage(event.sender.id, response)
}

function sendMessage(recipientId, message) {
    request({
        url: 'https://graph.facebook.com/v2.6/me/messages',
        qs: {access_token: process.env.PAGE_ACCESS_TOKEN},
        method: 'POST',
        json: {
            recipient: {id: recipientId},
            message: message,
        }
    }, function(error, response, body) {
        if (error) {
            console.log('Error sending message: ', error)
        } else if (response.body.error) {
            console.log('Error: ', response.body.error)
        }
    })
}