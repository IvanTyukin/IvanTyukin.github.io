'use strict';

 function getDecimal (num) {
    num = Math.abs(num)
    const str = num + ''
    const index = str.indexOf('.')
    const decimal = str.length - index
    
    return (num - Math.floor(num)).toPrecision(decimal)
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
