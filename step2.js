/////// ADD TO ZERO ////////////

// Time complexity O(n^2)
// Space complexity O(1)

function addToZero (numbers) {
  let test = false;
  for (let j = 0; j < numbers.length; j++) {
      for (let i = (j + 1); i < numbers.length; i++) {
          if (numbers[j] + (numbers[i]) === 0) {
              console.log("True")
              test = true
              return true
          }
      }
  };
  if (test === false) {
      console.log("False")
  }
}

addToZero([]);
// -> False

addToZero([1]);
// -> False

addToZero([1, 2, 3]);
// -> False

addToZero([1, 2, 3, -2]);
// -> True

//////// HAS UNIQUE CHARACTERS ////////

// Time complexity O(n) --> Set has a time complexity of n !
// Space complexity O(1)

function hasUniqueChars (word) {
  return new Set(word).size === word.length;
}

console.log(hasUniqueChars("Monday"));
// -> True

console.log(hasUniqueChars("Moonday"));
// -> False

/////////// PANGRAM SENTENCE  ///////////////

//time complexity O(n)
// space complexity O(1)

function isPangram (arr) {
  return new Set(arr.toLowerCase().match(/[a-z]/g)).size === 26
}

console.log(isPangram("The quick brown fox jumps over the lazy dog!"))
// -> True

console.log(isPangram("I like cats, but not mice"))
// -> False

////////// LONGEST WORD //////////////

// time complexity O(n)
// Space complexity O(1)

function findLongestWord (arr) {
  let count = 0
  for (let i = 0; i < arr.length; i++) {
    if ( arr[i].length > count) {
      count = Number(arr[i].length)
    }
  }
  return count
}

console.log(findLongestWord(["hi", "hello"]))
// -> 5