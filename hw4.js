//=============Функции==============//

//------------- 11-------------------//6 kyu Once
// Вы реализуете once функцию, которая принимает другую функцию в качестве аргумента и
// возвращает новую версию этой функции, которую можно вызвать только один раз.
// Последующие вызовы результирующей функции не должны иметь никакого эффекта (и должны возвращать undefined).

// function once(fn) {
//     let wasCalled = false;
//     return function (...args) {
//         if (!wasCalled) {
//             wasCalled = true;
//             return fn(...args);
//         }
//     };
// }

// function sum(a, b) {
//     return a + b;
// }

// function cube (x) {
//     return x ** 3;
// }

// const oSum = once(sum);
//  const oCube = once(cube);

// console.log(oSum(3, 4)); // 7
// console.log(oSum(5, 6)); // undefined

// console.log(oCube(3)); // 27
// console.log(oCube(3)); // undefined

//------------- 12-------------------//multiFilter
// напишите функцию с именем multiFilter, которая получает переменное количество
//  функций фильтрации. Функция должна возвращать функцию, которая получает один
// элемент(функция составного фильтра).
// console.log(">>>", num, fns);

// function multiFilter(...fns) {
//     return function (num) {
//         return fns.every(fn => fn(num))
//     }
// }

// function isEven(el){
//     return el % 2 === 0;
// }

// function isGTten(el){
//     return el > 10;
// }

// const result = multiFilter(isEven, isGTten);

// console.log(result(123)) // false
// console.log(result(10)) // false
// console.log(result(5)) // false
// console.log(result(20)) // true
//===================================================================================

//------------- 13 -------------------// 5 kyu  I Spy
// реализуйте spyOnфункцию, которая принимает любую функцию func в качестве параметра и возвращает
//  spyfor func. Возвращенный объект spy должен вызываться так же, как и исходный func, и
//   включать следующие дополнительные свойства / методы:
// .callCount() — возвращает количество spy вызовов
// .wasCalledWith(val)– возвращает, true если spy когда-либо вызывалась с val, иначе возвращает false.
// .returned(val)— возвращает, true если spy когда-либо возвращалось val, иначе возвращаетfalse

// function spyOn(func) {
//     let counter = 0;
//     const argsArr = []; // 2, 4 ,3, 5
//     const returnedArr = [];
//     function inner(...args) {
//         counter += 1;
//         argsArr.push(...args);
//         console.log(argsArr);
//         const res = func(...args);
//         returnedArr.push(res);
//         return res;
//     }

//     inner.callCount = () => counter;
//     inner.wasCalledWith = (val) => argsArr.includes(val);
//     inner.returned = (val) => returnedArr.includes(val);
//     return inner
// }

// function adder(n1, n2) {
//     return n1 + n2;
// }
// const adderSpy = spyOn(adder);

// console.log("----", adderSpy.callCount()); // 0

// console.log(adderSpy(2, 4)); // 6
// console.log(adderSpy(3, 5)); // 8
// console.log(adderSpy.wasCalledWith(4));
// console.log(adderSpy.wasCalledWith(0));
// console.log(adderSpy.returned(8));
// console.log(adderSpy.returned(0));
// // console.log("----", adderSpy.callCount()); // 2

// // console.log(adderSpy(1, 1)); // 2
// // console.log(adderSpy(1, 1)); // 2
// // console.log(adderSpy(1, 1)); // 2

// console.log("----", adderSpy.callCount()); // 5
//========================================================================

//----------------------- 14 --------------------// 6 kyu Combinator Flip
// Создайте функцию - комбинатор с именем flip, которая принимает функцию в
// качестве аргумента и возвращает эту функцию с перевернутыми аргументами.

// function flip(fn) {
//     return function (...args) {
//         args.reverse()
//         return fn(...args)
//     }
// }

// const pow = (a, b) => a ** b;

// console.log(pow(2, 3)); // 8
// const flippedPow = flip(pow);
// console.log(flippedPow(2, 3)); // 9

// console.log(pow(2, 3)); //8

// function join(...args) {
//     return args.join(" ");
// }

// console.log(join("a", "b", "c")); // "a b c"

// const flippedJoin = flip(join);
// console.log(flippedJoin("x", "y")) // "y x";
// console.log(flippedJoin("q", "w", "e", "r")) // "r e w q";

// const flippedPrints = flip(prints)
// console.log(flippedPrints(4, 5, 6, 7));
//============================================================================

//------------------------ 15 --------------------- //6 kyu "Stringing"+"Me"+"Along"
// Реализуйте функцию, которая получает строку и позволяет расширять ее повторными
// вызовами.Когда аргумент не передается, вы должны вернуть строку, состоящую из слов,
//     разделенных пробелами, которые вы получили ранее.

// function createMessage(str) {
//     let string =  str;
//     return function addStr(newStr) {
//          if (newStr !== undefined) {
//              string += ' ' + newStr;
//              return addStr;
//          }
//          else {
//              return string;
//          };
//     }
// }
// const string = createMessage('Hello')('world')();
//  console.log(string);
//=========================================================================================

//------------------------ 16 --------------------- //5 kyu A Chain adding function
//создать функцию, которая будет складывать числа при последовательном вызове.

// function add(number) {
//     let sum = number;
//     function addNum(nextNum) {
//         if (nextNum !== undefined) {
//             sum += nextNum;
//            return addNum;
//         }
//         else {
//             return sum;
//         }
//     }
//     addNum[Symbol.toPrimitive] = function () {
//        return sum;
//     }
//     return addNum;
// }
// const addNumber = add(1)(2)(3);
// const newAddNumber = addNumber(4);
// console.log(+newAddNumber); // 10
// const newAddNumber2 = addNumber(100);
// console.log(+newAddNumber2); // 106

// console.log(obj[Symbol.toPrimitive] = addNum == 6);

// https://learn.javascript.ru/object-basics
// Тип данных Symbol
// Преобразование объектов в примитивы

// const obj = { x: 123 }
// obj[Symbol.toPrimitive] = () => 100
// console.log(obj)
// console.log(obj == 100)
// console.log(obj === 100)
// console.log(+obj)

// https://learn.javascript.ru/object-toprimitive#symbol-toprimitive

//------------------------ 17 --------------------- //6 kyu Reusable memoisation
// Реализуйте повторно используемую функцию запоминания
//     , которая, учитывая функцию одного аргумента, возвращает запомненную функцию
// одного аргумента.Функции с более чем одним аргументом можно запоминать, каррируя
// функцию и запоминая ее для каждого аргумента, по одному за раз.Это проще для
// повторного использования, чем наличие другого компонента запоминания для каждого
//  количества аргументов.

// function memoize(fn) {
//     const map = new Map();
//     return function memoFn(arg) {
//         if (map.has(arg)) {
//             return map.get(arg);
//         }
//         else{
//             let result = fn(arg);
//            map.set(arg, result)
//             return result;
//         }
//     }
// }
// const fib = memoize(
//     function (num) {
//         if (num < 2) {
//             return num;
//         }
//         return fib(num - 1) + fib(num - 2);
//     }
// )

// const factorial = memoize(
//     function (x) {
//         if (x === 0) {
//             return 1;
//         }
//         else {
//             return x * factorial(x - 1);
//         }
//     }
// );

// console.log(fib(3));
// console.log(fib(5));
// console.log(fib(400));
// console.log(factorial(5));
// console.log(factorial(15));
// console.log(factorial(20));

// function memo(fn) {
//     let cache = {};
//     return function memoFn(a) {
//         if (Object.keys(cache).length !== 0) {
//             let value = Object.values(cache)[0];
//             value *= a;
//             cache['b'] = value;
//             return value ;
//         } else {
//             let res = fn(a);
//             cache['b'] = res;
//             return res;
//         }
//     }
// }

// function fn(a) {
//return a === 0 || a === 1 ? 1 : a * fn(a - 1); //factorial

// }
// const memoFn = memo(fn);

// console.log(memoFn(0));
// console.log(memoFn(1));
// console.log(memoFn(15));

//------------------------ 18 --------------------- //Генераторы ES5(i)
//реализовать псевдогенераторы с помощью ES5.

// function generator(sequencer, ...args) {
//     return {
//       next: sequencer(...args),
//     }
// }

// function dummySeq() {
//   return function() {
//     return "dummy";
//   };
// }

// function factorialSeq() {
//     let factorial = 1;
//     let n = 0;
//     return function fn() {
//         const result = factorial;

//         n += 1;
//         factorial *= n;

//         return result;
//     }

// }
// const fn = factorialSeq();

// console.log(fn());
// console.log(fn());
// console.log(fn());
// console.log(fn());
// console.log(fn());
// console.log(fn());

// function fibonacciSeq() {
//     let cache = [0, 1];
//     return function () {
//         cache[1] = cache[0] + cache[1];
//         cache[0] = cache[1] - cache[0];
//         return cache[0];
//     }
// }
// const fn = fibonacciSeq();

// console.log(fn()); // 1
// console.log(fn()); // 1
// console.log(fn()); // 2
// console.log(fn()); // 3
// console.log(fn()); // 5
// console.log(fn()); // 8

// function rangeSeq(start, step) {
//     let arg = start;
//     return function () {
//         const res = arg;
//         arg += step;
//         return res;
//     }
// }

// const fn = rangeSeq(1, 2);

// console.log(fn());
// console.log(fn());
// console.log(fn());
// console.log(fn());
// console.log(fn());
// console.log(fn());

// https://www.codewars.com/kata/5262119038c0985a5b00029f

// function isPrime(num) {
//   if (num < 2) return false;

//   for(var i=2; i*i <= num; i++) {
//     if (num % i === 0) return false;
//   }
//   return true;
// }

// function primeSeq() {
//     let dividend = 2;
//     return function () {
//         const n = dividend;

//         while (true) {
//           dividend += 1
//           if (isPrime(dividend)) {
//             break;
//           }
//         }

//         return n;
//     }
// };

// const fn = primeSeq();

// console.log(fn()); // 2
// console.log(fn()); // 3
// console.log(fn()); // 5
// console.log(fn()); // 7
// console.log(fn()); // 11
// console.log(fn()); // 13
// console.log(fn()); // 17

// function partialSumSeq() {
//     let cache = 0;
//     return function (n) {
//     return cache += n;
//     }
// }
// const fn = partialSumSeq();

// console.log(fn(1));
// console.log(fn(3));
// console.log(fn(7));
// console.log(fn(2));
// console.log(fn(0));
