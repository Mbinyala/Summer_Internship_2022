# <p align=center> JavaScript Basic level 4 </P>

# anonymous functions
Anonymous Function is a function that does not have any name associated with it. when we create a function in java script we use function keyword and then function name
but in anonymous function we dont use function name.
- anonymous functions can have multiple arguments.
- anonymous functions have only one expression.
- it can only be accessed by a variable it is stored in as a function as a value.

```javascript
let x = function () {  
    console.log('It is an anonymous function');  
};  
x();

```

# Difference between arrow functions and regular functions?

arrow functions is a new feature introduced in javascript that is a more concise syntax for writing function expressions. Arrow functions  Allows a developer to accomplish the same result with fewer lines of code.
- if there is only one expression we dont require braces:
```javascript
const greet = () => "good morning";
```

- If there’s only one argument, then the parentheses are not required either:

```javascript
let squareNum = x => x * x;
```
- arrow functions can not be used as constructor functions.

Regular function is created using function keyword and function name.
```javascript
let x = function function_name(parameters){
   // body of the function
}
```

# Example of arrow function and regular function:
Arrow function:
```javascript
var square = (x) => {
    return (x*x);
};
console.log(square(9));
```

Regular function:
```javascript
let square = function(x){
  return (x*x);
};
console.log(square(9));
```

# What is Hoisting in JavaScript?
In JavaScript, variable and function names can be used before declaring it. The JavaScript compiler moves all the declarations of variables and functions at the top so that there will not be any error. This is called hoisting. Example:

```javascript
x = 1;

alert('x = ' + x); // display x = 1

var x;
```

# JavaScript is a garbage collected programming language, explain how?
JavaScript, utilize a form of automatic memory management known as garbage collection. The purpose of a garbage collector is to monitor memory allocation and determine  when a block of allocated memory is no longer needed and reclaim it.
In older programming languages, such as C and C++, the developer must manually delete objects and free up memory.

# Explain Shallow vs Deep copy in JS?
A deep copy means that all of the values of the new variable are copied and disconnected from the original variable. A shallow copy means that certain values are still connected to the original variable.

Shallow copy:
```javascript
let person = {
  firstName: "John",
  lastName: "Doe",
  address: {
    street: "North 1st street",
    city: "San Jose",
    state: "CA",
    country: "USA",
  },
};

let copiedPerson = Object.assign({}, person);

copiedPerson.firstName = "Jane"; // disconnected

copiedPerson.address.street = "Amphitheatre Parkway"; // connected
copiedPerson.address.city = "Mountain View"; // connected

console.log(copiedPerson)
```

Deep copy:
```javascript
let person = {
  firstName: "John",
  lastName: "Doe",
  address: {
    street: "North 1st street",
    city: "San Jose",
    state: "CA",
    country: "USA",
  },
};

let copiedPerson = JSON.parse(JSON.stringify(person));

copiedPerson.firstName = "Jane"; // disconnected

copiedPerson.address.street = "Amphitheatre Parkway";
copiedPerson.address.city = "Mountain View";

console.log(person);
```


# What is Object.freeze ?
The Object.freeze() method freezes an object. A frozen object can no longer be changed; freezing an object prevents new properties from being added to it, And it preents existing properties from being removed.

```javascript
const obj = {
  prop: 42
};

Object.freeze(obj);

obj.prop = 33;
// Throws an error in strict mode

console.log(obj.prop);
// expected output: 42
```
# Explain strict comparison and Abstract comparison in javascript?
The Abstract Equality Operator checks whether two operands are equal and returns true if equal, false otherwise. example:
``` javascript
js console.log(1 == 1) //This will print true since both values are equal. 
``` 

The Strict Equality Operator checks whether two operands are equal and are of the same type. example:
```javascript
console.log(1 === "1")      
```


# Program :
```javascript
const array = [];

function random(a,b){
    
    return  Math.floor(Math.random()*(max - min + 1) + min))

}

const number1 = random(-100,0);
const number2 = random(-900,800);

array.push(number1);
array.push(number2);

console.log(array.sort());

```




