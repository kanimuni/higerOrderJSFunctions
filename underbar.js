
  // Returns whatever value is passed as the argument. This function doesn't
  // seem very useful, but remember it--if a function needs to provide an
  // iterator when the user does not pass one in, this will be handy.
  identity = function(val) {
    return val;
  };

  /*
   * COLLECTIONS
   * ===========
   *
   * In this section, we'll have a look at functions that operate on collections
   * of values; in JavaScript, a 'collection' is something that can contain a
   * number of values--either an array or an object.
   *
   *
   * IMPORTANT NOTE!
   * ===========
   *
   * The .first function is implemented for you, to help guide you toward success
   * in your work on the following functions. Whenever you see a portion of the
   * assignment pre-completed, be sure to read and understand it fully before
   * you proceed. Skipping this step will lead to considerably more difficulty
   * implementing the sections you are responsible for.
   */

  // Return an array of the first n elements of an array. If n is undefined,
  // return just the first element. 

var first = function(array, n) {
  return n === undefined ? array[0] : array.slice(0, n);
};


// should pull the last element from an array
// should accept an index argument
// should return empty array if zero is passed in as the index
// should return all the array's elements if the index argument is larger 
// than the length of the array

var last = function(array, n) {
  if (n === 0) {
    return [];
  } else if (n === undefined) {
    return array[array.length-1];
  } else if (n > array.length) {
    return array;
  } else {
    return array.slice(-n);
  }
};




  // Call iterator(value, key, collection) for each element of collection.
  // Accepts both arrays and objects.
  //
  // Note: _.each does not have a return value, but rather simply runs the
  // iterator function over each item in the input collection.

var each = function(collection, iterator) {
  if (Array.isArray(collection)) {
    for (var i=0; i<collection.length; i++) {
      iterator(collection[i], i, collection);
    }
  } else {
    for (var key in collection) {
      iterator(collection[key], key, collection);
    }
  }
};



  // <indexOf> Returns the index at which value can be found in the array, or -1 if value
  // is not present in the array.
  // TIP: Here's an example of a function that needs to iterate, which we've
  // implemented for you. Instead of using a standard `for` loop, though,
  // it uses the iteration helper `each`, which you will need to write.
    
  var indexOf = function(array, target) {
    var result = -1;
    each(array, function(value, key){
      if (value === target) {
        result = key;
      }
    });
    return result;
  };



// <filter> Return all elements of an array that pass a truth test.

var filter = function(collection, test) {
  var resultArray = [];
  each(collection, function(value, key) {
    if (test(value, key)) {
      resultArray.push(value);
    }
  });
  return resultArray;
};


// <reject> Return all elements of an array that don't pass a truth test.

  








//   _.reject = function(collection, test) {
//     // TIP: see if you can re-use _.filter() here, without simply
//     // copying code in and modifying it
//     var resultArray = [];
//     _.each(collection, function(value) {
//       if (!test(value)) {
//         resultArray.push(value);
//       }
//     });
//     return resultArray;
//   };

//  // Produce a duplicate-free version of the array.
//  _.uniq = function(array) {
//   var noDupArray = [];
//   var hashObject = {};

//   _.each(array, function(value) {
//     if (hashObject[value] === undefined) {
//       noDupArray.push(value);
//       hashObject[value] = true;
//     }
  
//   });
//   return noDupArray.sort();
// };


//   // Return the results of applying an iterator to each element.
//   _.map = function(collection, iterator) {
//     // map() is a useful primitive iteration function that works a lot
//     // like each(), but in addition to running the operation on all
//     // the members, it also maintains an array of results.
//     var mappedArray = [];
//     _.each(collection, function(key, value, collection) {
//     mappedArray.push(iterator(key, value, collection));
//     });
//       return mappedArray;
//   };

//   /*
//    * TIP: map is really handy when you want to transform an array of
//    * values into a new array of values. _.pluck() is solved for you
//    * as an example of this.
//    */

//   // Takes an array of objects and returns and array of the values of
//   // a certain property in it. E.g. take an array of people and return
//   // an array of just their ages
//   _.pluck = function(collection, key) {
//     // TIP: map is really handy when you want to transform an array of
//     // values into a new array of values. _.pluck() is solved for you
//     // as an example of this.
//     return _.map(collection, function(item){
//       return item[key];
//     });
//   };

//   // Reduces an array or object to a single value by repetitively calling
//   // iterator(accumulator, item) for each item. accumulator should be
//   // the return value of the previous iterator call.
//   //  
//   // You can pass in a starting value for the accumulator as the third argument
//   // to reduce. If no starting value is passed, the first element is used as
//   // the accumulator, and is never passed to the iterator. In other words, in
//   // the case where a starting value is not passed, the iterator is not invoked
//   // until the second element, with the first element as its second argument.
//   //  
//   // Example:
//   //   var numbers = [1,2,3];
//   //   var sum = _.reduce(numbers, function(total, number){
//   //     return total + number;
//   //   }, 0); // should be 6
//   //  
//   //   var identity = _.reduce([5], function(total, number){
//   //     return total + number * number;
//   //   }); // should be 5, regardless of the iterator function passed in
//   //          No accumulator is given so the first element is used.
  


// _.reduce = function(collection, iterator, accumulator) {
//   if (arguments.length > 2) {
//     _.each(collection, function(value, key) {
//       accumulator = iterator(accumulator, value, key);
//     });
//   } else {
//     var noAccumulatorProvided = true;
//     _.each(collection, function(value, key) {
//       if (noAccumulatorProvided) {
//         accumulator = value;
//         noAccumulatorProvided = false;
//       } else {
//         accumulator = iterator(accumulator, value, key);
//       }
//     });
//   }
//   return accumulator;
// };

//   // Determine if the array or object contains a given value (using `===`).
//   _.contains = function(collection, target) {
//     // TIP: Many iteration problems can be most easily expressed in
//     // terms of reduce(). Here's a freebie to demonstrate!
//     return _.reduce(collection, function(wasFound, item) {
//       if (wasFound) {
//         return true;
//       }
//       return item === target;
//     }, false);
//   };


// // Determine whether all of the elements match a truth test.
// // TIP: Try re-using reduce() here.
// _.every = function(collection, iterator) {
//   iterator = iterator || _.identity;
//   return _.reduce(collection, function(accumulator, item) {
//     if ( accumulator && iterator(item)) {
//       accumulator = true;
//       return accumulator;
//     } else {
//       accumulator = false;
//       return accumulator;
//     }
//   }, true);
// };


//   // Determine whether any of the elements pass a truth test. If no iterator is
//   // provided, provide a default one
//   // TIP: There's a very clever way to re-use every() here.

// _.some = function(collection, iterator) {
//   iterator = iterator || _.identity;
//   return _.reduce(collection, function(accumulator, item) {
//     if (accumulator || iterator(item)) {
//       accumulator = true;
//       return accumulator;
//     } else {
//       accumulator = false;
//       return accumulator;
//     }
//   }, false);
// };


//   /*
//    * OBJECTS
//    * =======
//    *
//    * In this section, we'll look at a couple of helpers for merging objects.
//    */

//   // Extend a given object with all the properties of the passed in
//   // object(s).
//   //
//   // Example:
//   //   var obj1 = {key1: "something"};
//   //   _.extend(obj1, {
//   //     key2: "something new",
//   //     key3: "something else new"
//   //   }, {
//   //     bla: "even more stuff"
//   //   }); // obj1 now contains key1, key2, key3 and bla


// _.extend = function(obj) {
//   _.each(arguments, function(subobj) {    //each takes the arguments passed here and passes on to the next each
//     _.each(subobj, function(value, key) { //Now this each takes the object passed and passes the value, key to the iterator
//       obj[key] = value;                   //This is basically an overright of any key:object pairs that was passed on to obj
//     });
//   });
//   return obj;
// };


// _.defaults = function(obj) {
//   _.each(arguments, function(subobj) {
//     _.each(subobj, function(value, key) {
//       if (obj[key] === undefined) {
//         obj[key] = value;
//       }
//     });
//   });
//   return obj;
// };


//   /**
//    * FUNCTIONS
//    * =========
//    *
//    * Now we're getting into function decorators, which take in any function
//    * and return out a new version of the function that works somewhat differently
//    */

//   // Return a function that can be called at most one time. Subsequent calls
//   // should return the previously returned value.
// /*

//   // Memorize an expensive function's results by storing them. You may assume
//   // that the function only takes primitives as arguments.
//   // memoize could be renamed to oncePerUniqueArgumentList; memoize does the
//   // same thing as once, but based on many sets of unique arguments.
//   //
//   // _.memoize should return a function that, when called, will check if it has
//   // already computed the result for the given argument and return that value
//   // instead if possible.
// */

// _.once = function(func) {
//   var result;
//   var alreadyCalled = false;
//   return function() {
//     if (!alreadyCalled) {
//       result = func.apply(this, arguments);
//       alreadyCalled = true;
//     }
//     return result;
//   };
// };

//  _.memoize = function(func) {
//   var memory = {};
//     return function() {
//       var args = [].join.call(arguments, ':');
//       if (!memory[args]) {
//         memory[args] = func.apply(this, arguments);
//       }
//     return memory[args];
//   };
// };

//   // Delays a function for the given number of milliseconds, and then calls
//   // it with the arguments supplied.
//   //
//   // The arguments for the original function are passed after the wait
//   // parameter. For example _.delay(someFunction, 500, 'a', 'b') will
//   // call someFunction('a', 'b') after 500ms

// /*
//   _.delay = function(func, wait) {
//     //var args = slice.call(arguments, 2);
//     var args = Array.prototype.slice.call(arguments, 2);
//       return setTimeout(function() {return func.apply(this, args);}, wait);
//   };
// */

//   _.delay = function(func, wait) {
//     var args = [].slice.call(arguments, 2);
//       return setTimeout(function() {return func.apply(this, args);}, wait);
//   };


//   /**
//    * ADVANCED COLLECTION OPERATIONS
//    * ==============================
//    */

//   // Randomizes the order of an array's contents.
//   //
//   // TIP: This function's test suite will ask that you not modify the original
//   // input array. For a tip on how to make a copy of an array, see:
//   // http://mdn.io/Array.prototype.slice
//   _.shuffle = function(array) {
//     var newArray = [];
//     var resultArray = [];
//     var newobj = {};
//     _.each(array, function(value, key) {
//       newArray.push([value, Math.random()]);
//     });
//     newArray.sort(function(a,b) {return a[1]-b[1];});
//     _.each(newArray, function(value, key) {
//       resultArray.push(newArray[key][0]);
//     });
//     return resultArray;
//   };






//    * EXTRA CREDIT
//    * =================
//    *
//    * Note: This is the end of the pre-course curriculum. Feel free to continue,
//    * but nothing beyond here is required.


//   // Calls the method named by functionOrKey on each value in the list.
//   // Note: You will need to learn a bit about .apply to complete this.
//   _.invoke = function(collection, functionOrKey, args) {
//   };

//   // Sort the object's values by a criterion produced by an iterator.
//   // If iterator is a string, sort objects by that property with the name
//   // of that string. For example, _.sortBy(people, 'name') should sort
//   // an array of people by their name.
//   _.sortBy = function(collection, iterator) {
//   };

//   // Zip together two or more arrays with elements of the same index
//   // going together.
//   //
//   // Example:
//   // _.zip(['a','b','c','d'], [1,2,3]) returns [['a',1], ['b',2], ['c',3], ['d',undefined]]
//   _.zip = function() {
//   };

//   // Takes a multidimensional array and converts it to a one-dimensional array.
//   // The new array should contain all elements of the multidimensional array.
//   //
//   // Hint: Use Array.isArray to check if something is an array
//   _.flatten = function(nestedArray, result) {
//   };

//   // Takes an arbitrary number of arrays and produces an array that contains
//   // every item shared between all the passed-in arrays.
//   _.intersection = function() {
//   };

//   // Take the difference between one array and a number of other arrays.
//   // Only the elements present in just the first array will remain.
//   _.difference = function(array) {
//   };

//   // Returns a function, that, when invoked, will only be triggered at most once
//   // during a given window of time.  See the Underbar readme for extra details
//   // on this function.
//   //
//   // Note: This is difficult! It may take a while to implement.
//   _.throttle = function(func, wait) {
//   };

// */
