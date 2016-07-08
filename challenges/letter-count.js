/*

  Create a function `letterCount` that accepts a string, and finds the number of times each letter
  occurs in the string. For example, given the word "apple", letterCount("apple") should count all
  occurrences of the letters "a", "p", "l" and "e" and then return the following output:

  ```javascript
  {
    "a": 1,
    "p": 2,
    "l": 1,
    "e": 1
  }
  ```

  Bonuses
  - Make sure that lower case letters and upper case letters count for the same character.
  - Ignore spaces, special characters, and punctuation.
  - Instead of just counting letters, calculate their percent-based frequency.
    See: http://www.math.cornell.edu/~mec/2003-2004/cryptography/subs/frequencies.html

    ```javascript
    {
      "a": 0.2, // percent
      "p": 0.4,
      "l": 0.2,
      "e": 0.2
    }
    ```

*/

// YOUR CODE HERE

// Write function that takes a string as input and split() it into an array.
// Set a variable equal to this array
//this set
// var chars = "apple".split('');
//
// var count = 0;
// for(var i = 0; i < array.length; ++i){
//     if(array[i] == i)
//         count++;
// }
//
// var word = "apple"
// word.split("p").length-1
//
//
// var arr
// function compare(word){
//     arr= word.split('');
// var sorted_arr = arr.slice().sort();
// var results = [];
// for (var i = 0; i < arr.length - 1; i++) {
//     if (sorted_arr[i + 1] == sorted_arr[i]) {
//         results.push(sorted_arr[i]);
//     }
// }
//
// console.log(results);
// }

//
function splitString(stringToSplit) {
  var removeSpclChar = stringToSplit.replace(/[^a-zA-Z ]/g, "");
  var arrayOfStrings = removeSpclChar.split(''); //store splitted string as arrayOfStrings
  var sortedString = arrayOfStrings.sort(); //sorts array string in alphabetical order it makes sure if all the duplicates are next to eachother
  var current = null;
  var count = 0;
  for (var i = 0; i < sortedString.length; i++) { //loop will run for the length of array of strings
      if (sortedString[i] != current) { //test if next character isn't the same
          if (count > 0) {
                console.log(current + ' = ' + count); // if doesn't
              }
              current = sortedString[i]; //if current
              count = 1;
          } else { //if same character ++
              count++;
          }
      }
      if (count > 0) { //pushes out repitition
          console.log(current + ' = ' + count);
        }
}
