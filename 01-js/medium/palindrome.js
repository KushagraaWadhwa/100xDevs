/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

// function isPalindrome(str) {
//   let b="";
//   for (let i = str.length -1; i >=0 ; i--){
//     b+=str[i];
//   }
//   return (b.toLowerCase()===str.toLowerCase());
// } 
//not passing all the test cases because of presence of alphanumeric characters in few cases
function isPalindrome(str) {
  let cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, ''); // Remove non-alphanumeric characters
  let reversedStr = cleanStr.split('').reverse().join('');
  return reversedStr === cleanStr;
}

module.exports = isPalindrome;
