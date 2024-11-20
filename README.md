# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs.

## Usage

**Install it:**

`npm install @vanessa_little/lotide`

**Require it:**

`const _ = require('@vanessa_little/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

- `head(array)`: Returns the first element of an array.
- `tail(array)`: Returns all elements of an array except the first one.
- `middle(array)`: Returns the middle element(s) of an array.
- `assertArraysEqual(actual, expected)`: Asserts whether two arrays are equal.
- `assertEqual(actual, expected)`: Asserts whether two primitive values are equal.
- `eqArrays(array1, array2)`: Compares two arrays for equality.
- `assertObjectsEqual(actual, expected)`: Asserts whether two objects are equal.
- `countLetters(string)`: Returns an object with the count of each letter in a string.
- `countOnly(items, criteria)`: Counts only specific items from an array based on the given criteria.
- `eqObjects(object1, object2)`: Compares two objects for equality.
- `findKey(object, callback)`: Returns the first key in an object that satisfies a callback function.
- `findKeyByValue(object, value)`: Returns the key that corresponds to a specific value in an object.
- `letterPositions(string)`: Returns the indices of each letter in a string.
- `map(array, callback)`: Returns a new array based on applying a callback function to each element of the input array.
- `takeUntil(array, callback)`: Returns a subset of the array up to the point where the callback returns a truthy value.
- `without(array, itemsToRemove)`: Returns a new array excluding the specified items.
