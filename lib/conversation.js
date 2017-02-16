var conversor = require('./mapper')
var context = { mapGalatic : {}, mapFactor : { }}

var knowLanguage = {
    directConversion: {
        regex: /^(\w+) is ([MDCLXVI])$/i,
        execute: (regex, phrase) => {
            var regexResult = regex.exec(phrase)
            context.mapGalatic = conversor.directMap(regexResult[1], regexResult[2], context.mapGalatic)
        }
    },
    getFactor: {
        regex: /^(.+) (.+) is (\d+) Credits$/i,
        execute: (regex, phrase) => {
            var regexResult = regex.exec(phrase)
            context.mapFactor = conversor.mapFactors(regexResult[2], regexResult[1].split(' '), parseInt(regexResult[3]), context.mapGalatic, context.mapFactor)
        }
    },
    calculateBasic: {
        regex: /^how much is (.+) \?$/i,
        execute: (regex, phrase) => {
            var regexResult = regex.exec(phrase)
            var factor = 1
            var readGalactic = regexResult[1].split(' ')
            var value = conversor.calculateGalactic(factor, readGalactic, context.mapGalatic)
            return readGalactic.join(' ') + ' ' + (context.mapFactor[regexResult[2]] ? regexResult[2] + ' ' : '') + 'is ' + value
        }
    },
    calculateCredits: {
        regex: /^how many Credits is (.+) (.+) \?$/i,
        execute: (regex, phrase) => {
            
            var regexResult = regex.exec(phrase)
            var factor = context.mapFactor[regexResult[2]] || 1
            var readGalactic = regexResult[1].split(' ')
            var value = conversor.calculateGalactic(factor, readGalactic, context.mapGalatic)
            return readGalactic.join(' ') + ' ' + (context.mapFactor[regexResult[2]] ? regexResult[2] + ' ' : '') + 'is ' + value + ' Credits'
        }
    },
    reset:{
        regex: /^reboot$/i,
        execute: (regex, phrase) => {
            context.mapGalatic = {}
            context.mapFactor = {}
            return 'rebooting...'
        }
    }
}

function interpret(phrase){
    try{
        for(var phraseSelector in knowLanguage)
            if(knowLanguage[phraseSelector].regex.test(phrase))
                return knowLanguage[phraseSelector].execute(knowLanguage[phraseSelector].regex, phrase)
        return 'have no idea what you are talking about'
    }
    catch(ex){
        return 'have no idea what you are talking about'
    }
}

module.exports = interpret