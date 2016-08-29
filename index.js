'use strict'

module.exports = function arrayKeyHash (array, idKey) {
  idKey = idKey || 'id'

  return array.reduce(function (acc, value) {
    if (!value) return acc

    const id = value[idKey]
    if (id != null) {
      acc[id] = value
    }
    return acc
  }, {})
}
