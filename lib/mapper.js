var converter = require('roman-arabic-converter')

function directMap(galactic, roman, map){
    map[galactic] = roman
    return map
}

function convertGalacticToRoman(galactics, map){
    var result = ''
    for(var galactic of galactics)
        result += map[galactic]
    return result
}

function mapFactors(galacticFactor, galactics, referenceValue, map, factorMap, convertGalacticToRomanFunc = convertGalacticToRoman){
    factorMap[galacticFactor] = referenceValue / converter.RomanToArabic(convertGalacticToRomanFunc(galactics,map))
    return factorMap
}

function calculateGalactic(galacticFactor, galactics, map, convertGalacticToRomanFunc = convertGalacticToRoman){
    return converter.RomanToArabic(convertGalacticToRomanFunc(galactics,map)) * galacticFactor
}

module.exports = { convertGalacticToRoman, directMap, mapFactors, calculateGalactic }