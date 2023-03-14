//=============Функции==============//

//------------- 11-------------------//6 kyu Once
// Вы реализуете once функцию, которая принимает другую функцию в качестве аргумента и
// возвращает новую версию этой функции, которую можно вызвать только один раз.
// Последующие вызовы результирующей функции не должны иметь никакого эффекта (и должны возвращать undefined).

// function once(fn) {
//     let i = 0;
//     return function (...args) {
//         if (i === 0) {
//             const res = fn(...args);
//         i += 1;
//             return res
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

//------------- 13 -------------------// 5 kyu  I Spy??????????????????????

// function spyOn(func) {
//    const spy = {
//     }
//     return function (...args) {
//         const res = func(...args);
//         return res;
//     }
// }

// function adder(n1, n2) {
//     return n1 + n2;
// }
// const adderSpy = spyOn(adder);
//  adderSpy.callCount();

// console.log(adderSpy(2, 4));
// console.log(adderSpy(3, 5));


//----------------------- 14 --------------------// 6 kyu Combinator Flip
// Создайте функцию - комбинатор с именем flip, которая принимает функцию в
// качестве аргумента и возвращает эту функцию с перевернутыми аргументами.

// function flip(prints) {
//     return function (...args) {
//         return prints(...args.reverse());
//     }
// }

// const flippedPrints = flip(prints)
// console.log(flippedPrints(4, 5, 6, 7));

// function prints(...args) {
//     return args.toString().replace(/[',']/g, '->');
// }
 

//------------------------ 15 --------------------- //6 kyu "Stringing"+"Me"+"Along"
// Реализуйте функцию, которая получает строку и позволяет расширять ее повторными
// вызовами.Когда аргумент не передается, вы должны вернуть строку, состоящую из слов,
//     разделенных пробелами, которые вы получили ранее.

function createMessage(str) {
    let string = '' || str;
    return function addStr(nextStr) {
        if (nextStr === undefined) {
            return string;
        }
        string += ' '+nextStr;
        console.log(string);
        return addStr;
    }
}
const createdMessageStr = createMessage('Hello')('world')();

//------------------------ 16 --------------------- //5 kyuA Chain adding function
//создать функцию, которая будет складывать числа при последовательном вызове.

// function add(n){
//     let num =  n;
    
//     function addNum(nextNum) { 
//         if (nextNum === undefined) {
//             return num;
//         }
//     num += nextNum;
//     return addNum;
//     }
// }
// const addNumber = add(1)(2)(3);
// //console.log(addNum);