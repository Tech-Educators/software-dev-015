# TypeScript Introduction

## TYPE DECLARATIONS

We are teling myNmae that is HAS to be a string and myNumber HAS to be a number.

```ts
const myName: string = "Tim";
const myNumber: number = 25;
```

## PARAMETER TYPES

We are telling this function is HAS to take number parameters.

```ts
function sum(a: number, b: number) {
  return a + b;
}

sum(10, 15);
sum(10, "15"); // this will error
```

## ARRAY TYPES

We can force an array to have a spceific type of item inside.

```ts
const myArray: number[] = [1, "Tim", 2]; // this will error saying "Tim" is not a number
```

## CUSTOM TYPES

We can define our own types that variables must conform to.

```ts
type person = {
  name: string;
  age: number;
  handsome: boolean;
  kind?: boolean; // this property is optional
};
```

Then we can declare variables as those types

```ts
const tim: person = {
  name: "Tim",
  age: 30,
  handsome: true,
};

const frankie: person = {
  name: "Francis Tables",
  age: 75,
  handsome: false,
  kind: true,
};

const jez: person = {
  name: "Jex",
  age: 21,
  handsome: false,
};

// Take note of how we aren't telling this sam varibale to be a person type
const sam = {
  name: "Sam",
  age: 21,
  handsome: true,
};
```

So now we can create an array that must only contain `person`'s

```ts
const people: person[] = [tim, frankie, jez, sam];
```

Notice how `sam` is allowed in the array even though she isn't a `person` because her object follows the RULES of type `person`

## ESCAPE HATCHES

The below lines mean the compiler will ignroe any errors on the next line after it

```ts
// @ts-ignore
{
  /* @ts-ignore */
}
```

Or if you don't know what type you want to make something, you can give it "any"

```ts
const coolObject: any = {
  time: "infinite",
  space: true,
};
```
