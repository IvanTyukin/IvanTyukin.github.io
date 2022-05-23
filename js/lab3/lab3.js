'use strict';

function getDecimal(num) {
    let a = num.slice(num.indexOf('.'));
    if (num.indexOf(".") == -1) {
        return 0;
    }
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
                else return false;
            }
            else return false;
        }
    }
}


function truncate(str, maxlength) {
    if (str.length > maxlength)
        str = str.slice(0, maxlength - 1) + '\u{2026}';
    return str;
}


function camelize(str) {
    return str
        .split('-')
        .map(
            (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
        )
        .join('');
}

function fibs(N) {
    let a = [];
    let str = '';
    if (!Number.isNaN(N))
        if (N == 0) str = 0;
        else
            for (let j = 0; j < N; ++j) {
                a[j] = fib(j);
                str += a[j] + ' ';
            }
    else str = NaN;

    return str;

    function fib(j) {
        let a = 1n;
        let b = 1n;
        let c;
        if (j == 0) return 0;
        if (j == 1) return 1;
        if (j == 2) return 1;
        for (let i = 3; i <= j; i++) {
            c = a + b;
            a = b;
            b = c;
        }
        if (b == 1n)
            b = 0;
        return b;
    }
}




function sum() {
    let result = 0;

    for (let i = 0; i < arguments.length; i++) {
        result += arguments[i];
    }

    return result;
}