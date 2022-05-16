'use strict';
/**
 * 
 * @param {num} число дробную часть которого надо получить
 */
 function getDecimal(num) {
    let str = "" + num;
    let zeroPos = str.indexOf(".");
    if (zeroPos == -1) return 0;
    str = str.slice(zeroPos);
    return +str;
  }
