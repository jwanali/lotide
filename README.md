# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @jwanali/lotide`

**Require it:**

`const _ = require('@jwanali/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* head: Function take an array as a parameter and returns the first item of an array.
* tail: Function take an array as a parameter and return new array after removing the first item of orginal array array .
* middle: return the middlie item of an array.
* assertObjectsEqual: function take two objects as parameters and return true if the are equal.
* assertEqual: function take two value as parameters and return true if the are equal.
* assertArraysEqual: function take two arrays as parameters and return true if the are equal.
* countLetters: return the repetition of each letter in a sentence
* countOnly: it return repetitions of certain elements in an array.
* eqArrays: function take two arrays as a parameter and compare them if they are equal or not.
* eqObjects: function take two objectss as a parameter and compare them if they are equal or not.
* findKey: function take an object and a key as a parameters and return true if the exist in th object.
* findKeyByValue: function take an object and value as a parameter and  return a key of the object if it's value equal the input value  
* flatten: return array with 1 row from taken array
* letterPositions: function take an sentence as parameter and return an object, each key in the object is an array of positions of certain key in the sentence
* takeUntil
* map: function take an array and callback function as parameteres and return new array after applaying the callback on each element in the orginal array. 
* without: function take an array and an element and return an array without the input element.