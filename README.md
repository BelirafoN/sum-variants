# Sum Variants 

[![Build Status](https://travis-ci.org/BelirafoN/sum-variants.svg?branch=master)](https://travis-ci.org/BelirafoN/sum-variants)
[![npm version](https://badge.fury.io/js/sum-variants.svg)](https://badge.fury.io/js/sum-variants)

Function, which included an array of random select all combinations of numbers whose sum is equal to the specified number

## Install 

```bash
$ npm i sum-variants
```

## Usage

```javascript
const sumVariants = require('sum-variants');
const srcArr = [.9, 6, '4', 9.1];

console.log(sumVariants(srcArr, 10));
// [[0.9, 9.1], [4, 6]]
```

## Tests 

Tests require [Mocha](https://mochajs.org/). 

```bash 
mocha ./tests
``` 

or with `npm` 

```bash
npm test 
```

Test coverage with [Istanbul](https://gotwarlost.github.io/istanbul/) 

```bash
npm run coverage
```

## License 

Licensed under the MIT License