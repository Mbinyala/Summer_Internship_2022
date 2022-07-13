


# What are the basic data types in TypeScript?
The basic data types in typescript are : 1.Number 2.string 3.Boolean 4.Any 5.Array 6.tuple 7.unknown

### Number types:
```typescript
let decimalValue: number = 10;
let hexaDecimalValue: number = 0xf10b;
```
### String type:
```typescript
let firstName: string = "Mayank";
```

### Boolean type:
```typescript
let isPrimaryAccount: boolean = true;
```

### Enum Types:
Enumerated data types (enums) are a set of numeric values with more friendly names. By default, the enum values start from 0 (zero), but you can also set it by manually entering the value of its members.

```typescript
enum CardTypes { Debit = 1, Credit, Virtual }
enum CardTypes { Debit = 1, Credit = 3, Virtual = 5 }

```
### Any Types:
While writing code for which you are unsure of the data type of a value, due to its dynamic content, you can use the keyword any to declare said variable

example:
```typescript
let dynamicValue: any = "Kunal Chowdhury";
```




# What is Generic data type ?
TypeScript Generics is a tool which provides a way to create reusable components. It creates a component that can work with a variety of data types rather than a single data type. It allows users to consume these components and use their own types. Generics ensures that the program is flexible as well as scalable in the long term.

```typescript
function identity<T>(arg: T): T {
  return arg;
}
let output1 = identity<string>("myString");
let output2 = identity<number>(100);
console.log(output1);
console.log(output2);
```


# What is type inferring in TS.
The type of the x variable is inferred to be number. This kind of inference takes place when initializing variables and members, setting parameter default values, and determining function return types.<br>
 - Variables are initialized   
- Function return types are determined

Example
```typescript
let x = 3;

let x: number;
```

# What are the possible ways to define typing for functions?
In TypeScript, there are multiple syntaxes for declaring the type of a function:
- Method signatures
- Function type literals
- Object type literals with call/construct signatures

### Method Signatures
The method signature syntax is probably the most straightforward to use. When defining an object type, its methods can easily be described by providing signatures as follows:
```typescript
interface Date {
  toString(): string;
  setTime(time: number): number;
  
}
```
###nFunction Type Literals
Function type literals are another way to declare the type of a function. They're typically used in the signature of a higher-order function, that is, a function which accepts functions as parameters or which returns a function:
```typescript
interface Array<T> {
  sort(compareFn?: (a: T, b: T) => number): this;
  
}
```
### Object Type Literals with Call or Construct Signatures
In JavaScript, functions are nothing but special objects than can be called. This fact is reflected in the syntax of object type literals: they describe the shape of an object, which also happens to have a call signature:

```typescript
interface RegExpConstructor {
  // Call signatures
  (pattern: RegExp): RegExp;
  (pattern: string, flags?: string): RegExp;
  
}
```

# How to define Generic type for Classes.

A generic class has a similar shape to a generic interface. Generic classes have a generic type parameter list in angle brackets (<>) following the name of the class.

```typescript
class GenericNumber<NumType> {
  zeroValue: NumType;
  add: (x: NumType, y: NumType) => NumType;
}

let myGenericNumber = new GenericNumber<number>();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function (x, y) {
  return x + y;
};
```









