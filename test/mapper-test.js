'use strict'
var test = require('tape')
var mapper = require('../lib/mapper')

test('direct map', function (t) {
    var map = mapper.directMap('glob', 'I', {})
    t.deepEqual(map, { 'glob': 'I' })
    t.end()
})

test('map factor', function (t) {
    var map = { 'glob': 'I' }
    t.deepEqual(mapper.mapFactors('Silver',['glob','glob'], 68, map, {}), { Silver: 34 })
    t.end()
})

test('converto to roman', function (t) {
    var map = { 'glob': 'I' }
    t.deepEqual(mapper.convertGalacticToRoman(['glob','glob'],map), 'II')
    t.end()
})

test('calculate galactic', function (t) {
    var map = { 'glob': 'I' }
    var mapFacor = { 'Silver': 34 }
    t.deepEqual(mapper.calculateGalactic(34,['glob','glob'], map), 68)
    t.end()
})
