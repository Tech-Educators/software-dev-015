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
  const myArray = [];

  for (let i = 1; i <= n; i++) {
    // make a variable that represents wheterh i is divisble by 3 or 5
    const divBy3 = i % 3 === 0; // true or false
    const divBy5 = i % 5 === 0; // true or false
    let ans = "";
    if (divBy3) {
      ans = ans + "Fizz";
    }
    if (divBy5) {
      ans = ans + "Buzz";
    }
    if (ans === "") {
      ans = i.toString();
    }
    myArray.push(ans);
  }

  return myArray;
}

const answer = fizzBuzz(15);
console.log(answer);
