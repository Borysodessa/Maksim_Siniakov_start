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
//         return res}
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
// console.log(oCube(4)); // undefined
// console.log(oCube(2)); // undefined


//------------- 12-------------------//multiFilter
// напишите функцию с именем multiFilter, которая получает переменное количество
//  функций фильтрации.Функция должна возвращать функцию, которая получает один
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

//.log(result(123)) // false
//console.log(result(10)) // false
//console.log(result(5)) // false
//console.log(result(20)) // true
