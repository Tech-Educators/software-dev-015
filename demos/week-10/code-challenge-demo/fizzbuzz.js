/*
Given an integer n, return a string array answer (1-indexed) where:

answer[i] == "FizzBuzz" if i is divisible by 3 and 5.
answer[i] == "Fizz" if i is divisible by 3.
answer[i] == "Buzz" if i is divisible by 5.
answer[i] == i (as a string) if none of the above conditions are true.
 

Example 1:

Input: n = 3
Output: ["1","2","Fizz"]
Example 2:

Input: n = 5
Output: ["1","2","Fizz","4","Buzz"]
Example 3:

Input: n = 15
Output: ["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"]
*/

function fizzBuzz(n) {
  // make an empty array
  const myArray = [];

  // make a loop that runs n times (use a for loop and use i as our variable)
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      // check if i is divisble by 3 & 5 - add FizzBuzz to my array
      myArray.push("FizzBuzz");
    } else if (i % 3 === 0) {
      // check if i is divible by 3 - add Fizz to my array
      myArray.push("Fizz");
    } else if (i % 5 === 0) {
      // check if i is divible by 5 - add Buzz to by array
      myArray.push("Buzz");
    } else {
      // in all other cases, add "i" to my array
      myArray.push(i.toString());
    }
  }

  // return my array
  return myArray;
}

const answer = fizzBuzz(15);
console.log(answer);
