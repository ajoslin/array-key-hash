# array-key-hash [![Build Status](https://travis-ci.org/ajoslin/array-key-hash.svg?branch=master)](https://travis-ci.org/ajoslin/array-key-hash)

> Get the id keys out of an array and create a hash of the values


## Install

```
$ npm install --save array-key-hash
```


## Usage

```js
var arrayKeyHash = require('array-key-hash')

const items = [
  {id: 1, foo: 'a'},
  {id: 2, foo: 'b'}
]
const itemsById = arrayKeyHash(items)

console.log(itemsById)
// => {1: {id: 1, foo: 'a'}, 2: {id: 2, foo: 'b'}}
```

## API

#### `arrayKeyHash(array, [idKey])` -> `object`

##### array

*Required*
Type: `array`

##### idKey

Type: `string`

The key to index the resulting hash by. Defaults to `'id'`.

##### Returns `object`

An object with keys representing ids of items in `array`, and values being the values of those items.

### Related / Recommended

- [array-hash-upsert](https://github.com/ajoslin/array-hash-upsert)

## License

MIT © [Andrew Joslin](http://ajoslin.com)
