'use strict'

var test = require('tape')
var arrayKeyHash = require('./')

test('basic', function (t) {
  const values = [
    {id: 'a', value: 1},
    {id: 'b', value: 2}
  ]

  const byId = arrayKeyHash(values)
  t.equal(byId.a, values[0], 'ref to values[0]')
  t.equal(byId.b, values[1], 'ref to values[1]')

  t.end()
})

test('custom key', function (t) {
  const values = [
    {name: 'alpha'},
    {name: 'beta'}
  ]

  const byId = arrayKeyHash(values, 'name')
  t.equal(byId.alpha, values[0], 'ref to values[0]')
  t.equal(byId.beta, values[1], 'ref to values[1]')

  t.end()
})

test('items with key missing are not added', function (t) {
  const values = [
    {id: 'a', foo: 1},
    {foo: 2},
    {id: 'c', foo: 3}
  ]

  t.deepEqual(arrayKeyHash(values), {
    a: {id: 'a', foo: 1},
    c: {id: 'c', foo: 3}
  })

  t.end()
})
