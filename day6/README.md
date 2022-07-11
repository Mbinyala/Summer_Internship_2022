# JavaScript Quiz (Basic Level-1)

# What is JavaScript?

JavaScript is the world most popular lightweight, interpreted compiled programming language. It is also known as scripting language for web pages.

JavaScript can be used for Client-side developments as well as Server-side developments.


# What is the difference between between let and var?

var and let are both used for variable declaration in javascript but the difference between them is that var is function scoped and let is block scoped. It can be said that a variable declared with var is defined throughout the program as compared to let.

# What is the use of JavaScript in Web Browsers?
JavaScript is commonly used for creating web pages. It allows us to add dynamic behavior to the webpage and add special effects to the webpage. On websites, it is mainly used for validation purposes. JavaScript helps us to execute complex actions and also enables the interaction of websites with visitors.

# Why do prefer const over var?
If you wish for a variable to be re-definable, one can prefer using var. The usage of const makes sure that the variable binding is immutable but the object itself can change whenever you like.

# What are Objects?
Objects are one of the available data types in JS. It is used to store various keyed collections and more complex entities. Objects can be created using the Object() constructor.

```javascript
 const person = {
  name: "John Doe",
  age: 52,
  jobStatus: "Retired",
};
```
 # What is an Array and how is it different from an Object in JavaScript?
An array is a special variable, that can hold more than one value. In Programming languages such as C++, Java,etc. Arrays are generally collection of similar types of data. Arrays in JS are also objects.

1. Arrays in JS are resizable and can contain a mix of different data types.
2. JS arrays are not associative arrays.
3. Arrays in JS are zero-indexed.



# What is a function?
Functions are a set of of organised instructions that correspond to a certain task or specific functionality a user wants to implement in their program to achieve a single desired outcome.

# How can we implement call by value and call by reference in Javascript?
Call by Value :-
When a variable is passed as a parameter to a function, if any changes are made to the parameter, the original variable will remain unaffected. This is known as call by value and this is true for all values having a primitive data type.

Example :-
```javascript
let origin = 10;
function updateOriginal(originalVal){
    originalVal +=10;
    console.log(originalVal);
}
updateOriginal(original);
console.log(original);
```
Call by reference :-
When a variable’s reference(address) and not its value is passed to a function’s parameter, any changes made to the parameter will update the original variable reference. This is known as call by reference and this is true for all values having a non-primitive data type.

Example :-
```javascript
let myObj = {
    value:10
}
function updateValue(objRef){
    objRef.value = 20;
}
updateValue(myobj);
console.log(myObj.value);

```

# What are the primitive data types in Javascript?
There are 7 primitive data types:-

- Boolean type
- Null type
- Undefined type
- Number type
- BigInt type
- String type
- Symbol type

# What is DOM?
The Document Object Model is a cross-platform and language-independent interface. It defines the logical structure of documents and the way a document is accessed and manipulated.

# Why do we need DOM?
DOM stands for Document Object Model. It is a programming interface that allows us to create, change, or remove elements from the document. We can also add events to these elements to make our page more dynamic. The DOM views an HTML document as a tree of nodes.

