var converter = require('roman-arabic-converter')

function directMap(galactic, roman, map){
    map[galactic] = roman
    return map
}

function mapFactors(galacticFactor, galactics, referenceValue, map, factorMap, convertGalacticToRomanFunc = convertGalacticToRoman){
    factorMap[galacticFactor] = referenceValue / converter.RomanToArabic(convertGalacticToRomanFunc(galactics,map))
    return factorMap
}

function convertGalacticToRoman(galactics, map){
    var result = ''
    for(var galactic of galactics)
        result += map[galactic]
    return result
}

function calculateGalactic(galacticFactor, galactics, map, factorMap, convertGalacticToRomanFunc = convertGalacticToRoman){
    return converter.RomanToArabic(convertGalacticToRomanFunc(galactics,map)) * factorMap[galacticFactor]
}

module.exports = { convertGalacticToRoman, directMap, mapFactors, calculateGalactic }