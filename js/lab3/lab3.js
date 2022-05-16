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
  