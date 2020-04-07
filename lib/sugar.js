// =============== PART 1 - Advanced Objects ================

/*
  This function receives an object and returns the number 
  of key-value pairs (properties) in the object.
*/
function size(object) {
  return Object.keys(object).length;
}

/*
  This function receives an object, whose values will all be numbers, and returns the smallest number in the object.
*/
function min(object) {
  const arrayOfvalues =Object.values(object);
  return Math.min(...arrayOfvalues)
}
/*
  This function receives an object, whose values will all be numbers, and returns the largest number in the object.
*/
function max(object) {
//create a variable for max value
//loop through and look at values. If max value undefined or 
//if value of obj is bigger than max value update max value and return max value.
//...spread syntax goes through each number and then returns the smallest number.
// console.log(arrayOfvalues);
  const arrayOfvalues =Object.values(object);
  return Math.max(...arrayOfvalues)
}

/*
  This function receives an object, and will return a clone of this object 
  - i.e. a new object with the same key-value pairs.
*/
function clone(object) {
 const obj2 =Object.assign({}, object)
  return obj2;
}
/*
  DONE  
  This function receives an object and returns the value for the given key.
  If the key does not exist it returns undefined.
  //
*/
function get(object, key) {
  //Loop through the object
  //if you find that key return value
  //else return undefined
  for(let banana in object) {
    return object[key];
}
}

/*
  DONE
  This function will receive an object and a key, and will return true if the object has the given key, and false if not.
*/
function has(object, key) {
  let newArray =Object.keys(object);
  for (let i = 0; i < newArray.length; i++) {
    if(newArray[i]===key) {
      return true;
    } 
    
  }
  return false;
}
   
/*
  DONE
  This function receives an object, whose values will all be numbers, and returns the sum of all these numbers.
*/
function sum(object) {
  //make a new array of just values (maybe not needed)
  let valueArray =Object.values(object);
  //make a new array of only the numbers that found
  let filtered = valueArray.filter(function(item) {
    return (typeof item === "number")
  });
  //total up the new numbers
  let total = 0;
  filtered.forEach(function (number) {
    total = total + number;
  })
  if(total>=0) {
    return total;
  }
}

/*
DONE but have QUERIES 
This function receives an object and will return a new object with the keys and values inverted. See the tests for examples of this.
*/
function invert(object) {
  //Make an an array of values
  let keys =Object.values(object);
  //Make an array of keys
  let values =Object.keys(object);
  //create a new object - I googled this and do not understand this bit
  // let result = {};
  // keys.forEach((key, i) => result[key] = values[i]);
  // return (result);
  //also googled this one, and I think I understand it.  Object.assign is used to make a new object.
  //...keys is going into each bit in the keys array mapping it into a new object? Is that what k,i means?
  //the function is passing in k each thing in the keys array and also i= each bit from values array.
  //the function then makes an object {} the stuff inside the curly brackets is what is going into the object, 
  //basically passing in the first thing form the key array and then adding the value array.
  result = Object.assign(...keys.map((k, i) => ({[k]: values[i]})))
  return result;
}

/*
  This function reveives an array of objects. It should return a single object, which is a combination of all the objects in the array.
*/
function addAll(arr) {
  let keys1 =[];
  let values2=[];
  //go into each element in the array split the object into an array keys
    for (let i = 0; i < arr.length; i++) {
    keys1.push(Object.keys(arr[i]))}; //push into the new keys array
    for (let i = 0; i < arr.length; i++) {
    values2.push(Object.values(arr[i]))}; //push into the new value array
    
    var keysMerged = [].concat.apply([], keys1); //this is to take an array of arrays and make it make into one array
    var valuesMerged = [].concat.apply([], values2);
    
    let result2 = {};
   keysMerged.forEach((key, i) => result2[key] = valuesMerged[i]);
   return result2; 
}

  
    


// =============== PART 2 - Functions as Values ================

/*
  This function allows you to find a value from an object which fulfils a criteria. It receives an object and a matcher function. It should test each value in the object against the matcher function and if a matching value is found, the value should be returned. Otherwise, return null.
*/
function find(obj, matcherFunc) {}

/*
  This function allows you to test whether every value in an object matches a certain criteria. For example, is every value greater than 100? The function receives an object and a tester function. If all values in the object pass the tester function, true is returned. Otherwise, return false.
*/
function every(obj, func) {}

/*
  This function allows you to test whether some values in an object match a certain criteria. For example, are at least some of the values greater than 100? The function receives an object and a tester function. If at least 1 of the values in the object pass the tester function, true is returned. Otherwise, return false.
*/
function some(obj, func) {}

function setUpGlobalObject() {
  Object.size = size;
  Object.min = min;
  Object.max = max;
  Object.clone = clone;
  Object.get = get;
  Object.has = has;
  Object.sum = sum;
  Object.invert = invert;
  Object.addAll = addAll;
  Object.find = find;
  Object.every = every;
  Object.some = some;
}

module.exports = setUpGlobalObject;
