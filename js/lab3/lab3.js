'use strict';

 function getDecimal(num) {
            let a = num.slice(num.indexOf('.'));
            let str = 0 + a; 
            if (Number(num) < 0) {
                str = 1 - Number(str);
                str = str.toFixed(a.length - 1);
            }
            return str;
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
