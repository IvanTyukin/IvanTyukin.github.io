'use strict';
/**
 * 
 * @param {number} x возводимое в степень число
 * @param {number} n СтепенЬ - натуральное
 * @return {number} - число x в стпени n
 */
function pow(x, n) {
    return x**n;
}


/**
 * 
 * @param {number} n число до которого ведётся сумма
 *  @return (number) сумма чисел от 1 до n
 */
function sumTo(n) {
  let result = 0;

  for (let i = 1; i <= n; i++) {
    result += i;
  }

  return result;
}



/**
 * 
 * @param {number} n число для факториала
 * @return {number}  - возращает n! 
 */
function factorial(n) {
  if (n)
    return (n * factorial(n - 1));
  else
    return 1;
}



 /**
 * 
 * @param {number} n - число чисел Фибоначи* 
 * @returns {bigInt} - n-ное число Фибоначи
 * 
 */
  function fib(n) {
    let a = 1n;
    let b = 1n;
    let c;
    if (n==0) return 0;
    if (n==1) return 1;
    if (n==2) return 1;
    for (let i = 3; i <= n; i++) {
      c = a + b;
      a = b;
      b = c;
    }
    if (b==1n)
      b = 0;
    return b; 
  }


/**
 * возращается анонимная фун-ия сравнения аргумента y
 * с x : false если y<x, true если y>x, иначе null
 * @param {numeric} x - число х 
 * @returns {function} - функция сравнения
 * 
 */
function compare(x) {
  let result = function (y) {    
      if (y > x) return true
      else if (y < x) return false
      else return null;        
  }
  return result;
}


/**
 * 
 * @param {number} num - число
 * @param {number} cols - к-во столбцов 
 * @returns {string} - на вывод
 * 
 */
function printNumbers(num, cols) {
  let str1 = ""
  let rows = Math.ceil(num / cols); //кол-во строк округлено в большую сторону
  for (let row = 0; row < rows; ++row) {
      let str = '';
      for (let col = 0; col < cols; ++col) {
          if ((row + rows * col) < num)
              str += (row + rows * col) + ' ';
      }
      str1+=str+"\n";       
  }
  return str1;
}


