function countLetters (inputString) {
  var result = {};
  var condensedString = inputString.replace(/\s/g,"");
  for (i = 0; i < condensedString.length; i++) {
    if (result[condensedString[i]]) {
      result[condensedString[i]] += 1;
    }
    else {
      result[condensedString[i]] = 1;
    }
  }
  console.log(result);
}
countLetters("lighthouse in the house");