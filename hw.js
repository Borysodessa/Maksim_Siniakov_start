//----------------------0.1-------------------------//Draw stairs

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

//------------------- 3 ----------------------------//Century From Year
//Учитывая год, верните столетие, в котором он находится.

// function century(year) {
//   return  Math.ceil(year / 100) ;
// }
// console.log(century(890));

//------------------- 4 ----------------------------//Abbreviate a Two Word Name
// Напишите функцию для преобразования имени в инициалы.Это ката строго состоит из
// двух слов с одним пробелом между ними.
// На выходе должны быть две заглавные буквы с точкой, разделяющей их.
// function abbrevName(name) {
//    const arr = name.split(' ');
//   return   arr[0].slice(0, 1).toUpperCase() + '.' + arr[1].slice(0, 1).toUpperCase();
// }
// console.log(abbrevName("Sam harris"));
//------------------- 5 ----------------------------//Reversed Strings
// function solution(str) {
//     return str.split('').reverse().join('');
// }
// console.log(solution('world'));

//------------------- 6 ----------------------------// Remove First and Last Character
// Это довольно просто.Ваша цель — создать функцию, которая удаляет первый и последний
// символы строки.Вам дан один параметр, исходная строка.Вам не нужно беспокоиться о
// строках, содержащих менее двух символов.

// function removeChar(str){
//     return str.slice(1, -1);
// };
// console.log(removeChar('eloquent'));

//------------------- 7 ----------------------------//Create Phone Number
// function createPhoneNumber(numbers) {
//     const str = numbers.join(''); console.log(str);
//   return `(${str.slice(0, 3)}) ${str.slice(3, 6)}-${str.slice(6)}`
// }
// console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));

//------------------- 8 ----------------------------//How many arguments
// function args_count(a, b, l) {
//  //   console.log(arguments[1]);
//     return arguments.length
// }
// console.log((args_count(1,2,3)))

//------------------- 9 ----------------------------// Leap Years
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
// console.log(isLeapYear(2014));

//------------------- 10 ----------------------------//If you can't sleep, just count sheep!!
// var countSheep = function (num) {
//     let value = '';
//     for (let i = 0; i < num; i += 1){
//         value += +`${i}`+' sheep...'
//     }
//     return value;
// }
// console.log(countSheep(10));

//------------------- 11 ----------------------------//String insert values
//Учитывая строку и объект нужно вернуть отформатированную строку.

// var format = function (str, foo) {
//      //console.log('exempl', `Hello ${obj.foo} - make me a ${obj.bar}`);
//     const string = `Hello {foo} - make me a {bar}`//.replace(/[{]/g, '${obj.');
//     return string;
// };
// console.log(format('Hello {foo} - make me a {bar}', { foo: 'Jack', bar: 'sandwich' }));

//------------------- 12 ----------------------------//Пара перчаток
// определить количество пар перчаток, которое вы можете составить из перчаток, которые есть в вашем ящике.
// Учитывая массив, описывающий цвет каждой перчатки, верните количество пар, которые вы можете составить,
// предполагая, что только перчатки одного цвета могут образовывать пары.

// function numberOfPairs(gloves){
//     const obj = {};
//     for (const glove of gloves) {
//         if (!obj.hasOwnProperty(glove)) {
//             obj[glove] = 1;
//         } else {
//             obj[glove] += 1;
//         }
//     }
//     return Object.entries(obj).filter(el => el[1] >= 2).map(el => Math.floor(el[1] / 2)).reduce((akk, el) => akk + el, 0);
// }
// console.log(numberOfPairs(["red", "green", "red", "blue", "blue", "red", "blue", "green", "red", "red", "blue", "blue", "blue", "blue"]));
//=========================================================================================================

//------------------- 13 ----------------------------//Simple Fun #379: Division
// function division(t,a,b){
//     const length = (t ** a - 1) / (t ** b - 1).toString().length;
//     return length > 100 ? (t ** a - 1) / (t ** b - 1).toString() : "Not an integer with less than 100 digits"
// }
// console.log(division(2, 9, 3));

//------------------- 14 ----------------------------//Simple Fun #52: Pair Of Shoes
// проверить, можно ли соединить найденные туфли так, чтобы каждая пара состояла из
//  правого и левого ботинка одинакового размера.
// function pairOfShoes(shoes) {
//     const arr0 = [];
//     const arr1 = [];
//     for (const el of shoes) {
//         if (el[0] === 0) {
//             arr0.push(el[1]);
//         } else {
//             arr1.push(el[1]);
//         }
//     }
//     if (arr0.length !== arr1.length) {
//         return false
//      }
//     console.log('arr0', arr0);
//         console.log('arr1', arr1);
//     return arr0.filter(el => arr1.includes(el)).length === arr0.length;
// }
// console.log(pairOfShoes([[0, 23], [1, 23], [1, 23], [0, 23], [0, 23], [0, 23]]));

//------------------- 15 ----------------------------//Roman Numerals Decoder//////////////////////
// function solution (roman) {

// 	return 0;
// }
// console.log(solution ('XXI'))  //21

//--------------------- 16 ---------------------------//Multiples of 3 or 5
// Завершите решение так, чтобы оно возвращало сумму всех чисел, кратных 3
// или 5, меньше переданного числа.Кроме того, если число отрицательное, верните 0

// function solution(number) {
//     let sum = 0;
//     for (let i = 0; i < number; i += 1){
//         if ( i % 3 === 0 || i % 5 === 0) {
//             sum += i;
//         }
//     }
//     return sum > 0 ? sum : 0;
// }
// console.log(solution(10));

//--------------------- 17 ---------------------------//String repeat
// Напишите функцию, которая принимает целое число nи строку sв качестве
//  параметров и возвращает строку, sповторяющуюся ровно столько nраз.

// function repeatStr(n, s) {
//     return s.repeat(n);
// }
// console.log(repeatStr(3, 's'));

//--------------------- 18 ---------------------------//Reverse fibonacci series
// Напишите функцию для генерации n рядов Фибоначчи(0, 1, 1, 2, 3...) в обратном
// порядке.На выходе должна быть строка рядов Фибоначчи в обратном порядке до
// заданного числа.

// function reverseFibo(n) {
//     const fibo = [];
//     for (let i = 0; i < n; i += 1) {
//         i === 0 || i === 1 ? fibo.push(i) : fibo.push((fibo[i - 1]) + (fibo[i - 2]));
//     }
//         return fibo.reverse().join('');
//     }
// console.log(reverseFibo(3));

//--------------------- 19 ---------------------------//Even Fibonacci Sum/////////////////////////////////////7kyu
// Дайте сумму всех четных чисел в последовательности Фибоначчи до числа,
//     переданного вашей функции, но не включая его.
// function isFibonacci(n) {
//     const fibo = [];
//     for (let i = 0; i < n; i += 1) {console.log(fibo[i - 1]) + (fibo[i - 2]);
//       fibo.lastIndexOf() < n && (i === 0 || i === 1) ? fibo.push(i) : fibo.push((fibo[i - 1]) + (fibo[i - 2]));
//     }
//     return fibo;
// }
// console.log(isFibonacci(2147483647));

//--------------------- 20 ---------------------------//Factorial 7 kyu
// function factorial(n) {
//    let sum = 1;
//     while (n > 0) {
//         sum *= n;
//         n -= 1;
//     }
//     return sum;
// }
// console.log(factorial(8));

// function factorial(n) {
//     let sum = 1;
//     for (let i = 1; i <= n; i += 1){
//          sum *= i;
//     }
//     return sum;
// }
//  console.log(factorial(8));

//--------------------- 21 ---------------------------//7 kyu Anagram Detection
// Завершите возвращаемую функцию, true если два заданных аргумента являются
//  анаграммами друг друга; вернуть false иначе.

//var isAnagram = function (test, original) {
//     if (test.length !== original.length) {
//         return false;
//     }
//     const obj = {};
//     for (const letter of test) {
//         if (!obj.hasOwnProperty(letter.toLowerCase())) {
//             obj[letter.toLowerCase()] = 1;
//         } else {
//             obj[letter.toLowerCase()] += 1;
//         }
//     } console.log('1', obj);
//     for (const letter of original) {
//         if (!obj.hasOwnProperty(letter.toLowerCase())) {
//             obj[letter.toLowerCase()] = 1;
//         } else {
//             obj[letter.toLowerCase()] -= 1;
//         }
//     }console.log(obj)
//     return Object.values(obj).every(letter => letter === 0);
//  };
// console.log(isAnagram("Buckethead", "DeathCubeK"));

//--------------------- 23 ---------------------------// Largest Elements
//выводит верхние nэлементы списка.
//  function largest(n, array) {
//   return  array.sort((a, b)=> b - a).slice(0, n).reverse();
// }
// console.log(largest(2,[ 7, 6, 5, 4, 3, 2, 1]));

//--------------------- 24 ---------------------------//6 kyu Simple Fun #221: Furthest Distance Of Same Letter
// Учитывая строку sстрочных букв('a' - 'z'), получите максимальное расстояние между
//  двумя одинаковыми буквами и верните это расстояние вместе с буквой, из которой оно образовано.
// Если существует более одной буквы с одинаковым максимальным расстоянием, верните ту,
// которая появляется первой s.

// function distSameLetter(s) {
//     const obj = {};
//     const arr = [...new Set(s.split(''))];
//     for (const letter of s) {
//         obj[letter] = s.lastIndexOf(letter) - (s.indexOf(letter) - 1);
//     }
//     const maxValue = Math.max(...Object.values(obj));
//     for (const el of arr) {
//         if (obj[el] === maxValue) {
//             return el + maxValue;
//         }
//     }
// }
// console.log(distSameLetter("fffffahhhhhhaaahhhhbhhahhhhabxx"));

//--------------------- 24 ---------------------------//6 kyu Simple Fun #338: The Sum Of Prime Distance

// function allPairs(arr) {
//     const array = [];
//     for (let i = 0; i < arr.length; i += 1) {
//         for (let j = 0; j < arr.length; j += 1) {
//             if (arr[i] !== arr[j] && ) {
//                 array.push([arr[i], arr[j]]);
//             }
//         }
//     }
//     return array;
// }
// console.log(allPairs([4, 6, 12]));

//--------------------- 25 ---------------------------//7 kyu The Span Function
// Он принимает последовательность и функцию - предикат и возвращает две
// последовательности.Первая последовательность содержит все элементы
// последовательности аргументов до элемента, вызвавшего первую ошибку
// предиката.Вторая возвращенная последовательность содержит остальную
// часть исходной последовательности.Исходная последовательность не изменена.

// function predicate(x) {
//     return Math.abs(x) % 2 !== 0;
// }

// function span(arr, predicate) {
//     if (predicate.length === 0 && true) {
//         return [[], []];
//     }
//     if (predicate.length === 0) {
//         return [[arr], []];
//     }

//     const array = [];
//     array.push([]);

//     for (const number of arr) {
//         if (predicate(number)) {
//             array[0].push(number);
//         }
//         if (!predicate(number)) {
//             counter = 0;
//             break;
//         }
//     }
//     array.push([]);
//     console.log("array", array);
//     for (let i = array[0].length; i < arr.length; i += 1) {
//         array[1].push(arr[i]);
//     }
//     return array;
// }
// console.log(span([13, 17, 19, 11, 21], predicate));

//--------------------- 26 ---------------------------//7 kyu The dropWhile Function
// Еще один продукт для функционального программиста.У вас есть последовательность
//  значений и некоторый предикат для этих значений.Вы хотите удалить самый длинный
//  префикс элементов, чтобы предикат был истинным для каждого элемента.Мы назовем
//  это функцией dropWhile.Он принимает два аргумента.Первая — это последовательность
// значений, а вторая — функция предиката.Функция не изменяет значение исходной
// последовательности.

//--------------------- 27 ---------------------------//7 kyu From-To-Step Sequence Generator

// Напишите функцию, которая генерирует последовательность чисел, которая начинается с
// номера «От», затем добавляет к каждому следующему члену номер «Шаг» до номера
// «До».Например:
//def generator (From, To, Step):
// function generator(From, To, Step) {
//     const res = [];
//     while (From <= To) {
//         res.push(From);
//         From += Step;
//     }
//     return res;
// }

// console.log(generator(10, 20, 1));


//--------------------- 28 ---------------------------//7 kyuString ends with?
// Завершите решение так, чтобы оно возвращало true, если первый переданный
// аргумент(строка) заканчивается вторым аргументом(тоже строкой).
// function solution(str, ending) {
//   return ending === str.slice(-ending.length)
// }
// console.log(solution('abcde', 'cde'));

//--------------------- 29 ---------------------------//7 kyu Highest and Lowest
// function highAndLow(numbers) {
//     return Math.max(...numbers.split(' ')) +' '+ Math.min(...numbers.split(' '));
// }
// console.log(highAndLow("1 2 3 4 5"));

//--------------------- 29 ---------------------------//6 kyu Replace With Alphabet Position

// function alphabetPosition(text) {
// const abc  = 'abcdefghijklmnopqrstuvwxyz'.split('');
//   return text.toLowerCase().replace(/[^a-z]/gi, "").split('').map(letter => abc.indexOf(letter)+1).join(' ');
// }
// console.log(alphabetPosition("The sunset sets at twelve o' clock."));



// function hotpo(n) {
//   let counter = 0;
//   while (n !== 1) {
//     n = n % 2 === 0 ? n / 2 : 3 * n + 1;
//     counter++;
//   }
//   return counter;
// }
// console.log(hotpo(5));


// function getAverage(marks){
//      const b = marks.reduce((akk, kur) => akk + kur) / marks.length
//     return Math.floor(b);
// }
// console.log(getAverage([1, 5, 87, 45, 8, 8]));
// console.log(parseInt('5', 2))

//-------------------------30-------------------//To square(root) or not to square(root)
//Если число имеет целый квадратный корень, возьмите его, иначе возведите число в квадрат.

// function squareOrSquareRoot(array) {
//     return array
//         .map(el => Number.isInteger(Math.sqrt(el)) ? Math.sqrt(el) : Math.pow(el, 2));
   
// }
// console.log(squareOrSquareRoot([4,3,9,7,2,1]))

//-------------------------31-------------------// 8 kyu Short Long Short
// Учитывая 2 строки aи b, вернуть строку формы короткая + длинная + короткая, с более
//  короткой строкой снаружи и более длинной строкой внутри.Строки не будут одинаковой
// длины, но могут быть пустыми(zerolength).

// function solution(a, b){
//     return a.length > b.length ? b + a + b : a  + b + a;
// }
// console.log(solution('Soon', 'Me'));

//-------------------------32-------------------//7 kyu First-Class Function Factory

// function factory(x){
//     return function (arr) {
//         return arr.map(el => el * x);
//     }
// }

// const myArray = factory(5)
// console.log(myArray([1, 2, 3]))

// function fib(fibonacci) {
//     let cache = {};
    
    
// return function fibNum() {
//     if (object.keys(cache) !== 0) {
    
//     }
  
    
//     }
  
  
// }

// function fibonacci(num) {
//     if (num < 2) return num;
//     return fib(num - 1) + fib(num - 2);
// }

// const fibFibonacci = fib(fibonacci)
// console.log(fibFibonacci(5));

//  describeAge=(a)=> {
// return `You're a(n) ${a <= 12 ? "kid" :a >= 13 && a <= 17 ? "teenager" :a >= 18 && a <= 64 ? "adult" : "elderly"}`
// }


// console.log(describeAge(20))


// function barTriang(p1, p2, p3){
//     const arr = [];
//     arr.push(Number(((p1[0] + p2[0] + p3[0])/3).toFixed(4)));
//     arr.push(Number(((p1[1] + p2[1] + p3[1])/3).toFixed(4)));
//     return arr;
// }

// console.log(barTriang([4, 6], [12, 4], [10, 10]));


// var humanYearsCatYearsDogYears = function(humanYears) {
//     const years = [];
//     years.push(humanYears);
//     if(humanYears === 1){[1, 15, 15]};
//     if (humanYears === 2) { [2, 24, 24] };
//     return [humanYears, 24 + (humanYears - 2) * 4, 24 + (humanYears - 2) * 5];
// }

// function depth(obj) {
//   if (obj === null || Object.keys(obj).length === 0 || Array.isArray(obj)) {
//     return 0;
//   }
//   let maxDepth = 1;//counter
//   const values = Object.values(obj);
//   for (const value of values) {
//     if (typeof value === "object") {
//       const depthValue = depth(value) + 1;
//       if (depthValue > maxDepth) {
//         maxDepth = depthValue;
//       }
//     }
//   }
//   return maxDepth;
// }



// console.log(depth(null));
// console.log(depth({}));
// console.log(depth({ a: 1 }));
// console.log(depth({ a: false }));

// console.log(depth({
// a: 1,
// c: { w: 3 },
// b: { c: 2, g: 5, f: { k: 5, l: 6 } },
// })
// );

// 1.проводим сравнение на 0, {}, [];
// 2.объявляем counter = 1;
// 3.получаем объект значений из obj(values);
// 4.перебираем циклом for of - values;
// 5.проверяем элементы на 'object';



// function depth(obj) {
//     if (obj === null || Object.keys(obj).length === 0 || Array.isArray(obj)) {
//         return 0;
//     }
//     let counter = 1;
//     const values = Object.values(obj);
//     for (const value of values) {
//         if (typeof value === 'object') {
//             const depthValue = depth(value) + 1;
//             if (counter < depthValue) {
//                 counter = depthValue;
//              }
//         }
//     }
//     return counter;
// }
// //console.log(depth({ a: 1, b: { c: 2 } }));
// // console.log(depth({
// // a: 1,
// // c: { w: 3 },
// // b: { c: 2, g: 5, f: { k: 5, l: 6 } },
// // })
// // );


// function factorial(n){
//   if (n === 0){
//     return 1;
//   }
  
//  n *= factorial(n-1);
//   return n;
// }
// console.log(factorial(-5))var summation = function (num) {


// var summation = function (num) {
//   let sum = num;
// while(num > 0){
//   sum += num = num-1
// }
//     return sum;
// }
// console.log(summation(8))