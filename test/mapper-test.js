'use strict'
var test = require('tape')

test('direct map', function (t) {
    var mapper = require('../lib/mapper')
    var map = mapper.directMap('glob', 'I', {})
    t.deepEqual(map, { 'glob': 'I' })
    t.end()
})

test('map factor', function (t) {
    var mapper = require('../lib/mapper')
    var map = { 'glob': 'I' }
    t.deepEqual(mapper.mapFactors('Silver',['glob','glob'], 68, map, {}), { Silver: 34 })
    t.end()
})

test('converto to roman', function (t) {
    var mapper = require('../lib/mapper')
    var map = { 'glob': 'I' }
    t.deepEqual(mapper.convertGalacticToRoman(['glob','glob'],map), 'II')
    t.end()
})

test('calculate galactic', function (t) {
    var mapper = require('../lib/mapper')
    var map = { 'glob': 'I' }
    var mapFacor = { 'Silver': 34 }
    t.deepEqual(mapper.calculateGalactic('Silver',['glob','glob'], map, mapFacor), 68)
    t.end()
})
