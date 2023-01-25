//------------------- 1 ----------------------------//Even or Odd
// Создайте функцию, которая принимает целое число в качестве аргумента
//  и возвращает значение "Even"для четных или "Odd"нечетных чисел.

// function evenOrOdd(number) {
//     return number % 2 === 0 ? 'Even' : 'Odd';
// }
// console.log(evenOrOdd(3));

//------------------- 2 ----------------------------//Opposite number
//Very simple, given an integer or a floating-point number, find its opposite.
// function opposite(number) {
//     return number * (-1)  ;
// }
// console.log(opposite(-5));


//------------------- 2 ----------------------------//Century From Year
//Учитывая год, верните столетие, в котором он находится.

// function century(year) {
//   return  Math.ceil(year / 100) ;
// }
// console.log(century(890));

//------------------- 3 ----------------------------//Abbreviate a Two Word Name
// Напишите функцию для преобразования имени в инициалы.Это ката строго состоит из
// двух слов с одним пробелом между ними.
// На выходе должны быть две заглавные буквы с точкой, разделяющей их.
// function abbrevName(name) {
//    const arr = name.split(' ');
//   return   arr[0].slice(0, 1).toUpperCase() + '.' + arr[1].slice(0, 1).toUpperCase();
// }
// console.log(abbrevName("Sam harris"));
//------------------- 4 ----------------------------//Reversed Strings
// function solution(str) {
//     return str.split('').reverse().join('');
// }
// console.log(solution('world'));


//------------------- 5 ----------------------------// Remove First and Last Character
// Это довольно просто.Ваша цель — создать функцию, которая удаляет первый и последний
// символы строки.Вам дан один параметр, исходная строка.Вам не нужно беспокоиться о
// строках, содержащих менее двух символов.

// function removeChar(str){
//     return str.slice(1, -1);
// };
// console.log(removeChar('eloquent'));

//------------------- 6 ----------------------------//Create Phone Number
// function createPhoneNumber(numbers) {
//     const str = numbers.join(''); console.log(str);
//   return `(${str.slice(0, 3)}) ${str.slice(3, 6)}-${str.slice(6)}`
// }
// console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));


//------------------- 7 ----------------------------//How many arguments
// function args_count(a, b, l) {
//  //   console.log(arguments[1]);
//     return arguments.length
// }
// console.log((args_count(1,2,3)))


//------------------- 8 ----------------------------// Leap Years
//  является ли данный год високосным или нет. Если вы не знаете правил, вот они:
// годы, которые делятся на 4, являются високосными
// но годы, кратные 100, не являются високосными
// но годы, кратные 400, являются високосными

// isLeapYear = year => { 
//     if (year % 4 !== 0 || (year % 100 === 0 && year % 400 !== 0) ) {
//         return false;
//     }
//       return true;
// }
// console.log(isLeapYear(2014))