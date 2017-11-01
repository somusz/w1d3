/*
Notes on spaces:
1) "for each letter" --> space is not a letter, hence it's not part of the output object
2) "multiple numbers to represent all the places in the string" --> spaces are part of the string, so they count in the positioning
*/

function countLetters (inputString) {
  var result = {};
  for (i = 0; i < inputString.length; i++) {
    if (inputString[i] == " ") {
      continue;
    }
    if (result[inputString[i]]) {
      result[inputString[i]].push(i);
    }
    else {
      result[inputString[i]] = [i];
    }
  }
  console.log(result);
}
countLetters("lighthouse in the house");