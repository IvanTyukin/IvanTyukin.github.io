'use strict';

 function getDecimal(num) {
    let str = "" + num;
    let zeroPos = str.indexOf(".");
    if (zeroPos == -1) return 0;
    str = str.slice(zeroPos);
    return +str;
  }


  function ucFirst(str) {
    if (!str) return str;
  
    return str[0].toUpperCase() + str.slice(1);
  }
  
  function checkSpam(str) {
    let firstWord = 'viagra';
    let secondWord = 'xxx';
    let string = str.toLowerCase();
    let result;

    if (checkTheWord(firstWord) || checkTheWord(secondWord)) {
        return true;
    }
    return false;

    function checkTheWord(word) {
        for (let i = 0; i < string.length - 1; i++) {
            if (string[i] == word[0]) {
                result = string.slice(i, i + word.length);
                if (result == word) {
                    return true;
                }
            }
        }
    }
}