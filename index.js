'use strict'

module.exports = function arrayKeyHash (array, idKey) {
  idKey = idKey || 'id'
  var result = {}

  for (var i = 0, length = array.length; i < length; i++) {
    var item = array[i]
    if (!item) continue

    var id = item[idKey]
    if (id == null) continue

    result[id] = item
  }

  return result
}
