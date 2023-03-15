                    //Рекурсии
//---------------------- 1 ---------------------//Sum The Tree
// написать функцию, которая возвращает сумму всех значений, включая
// корень.Отсутствие узла будет указано со nullзначением.
// var unbalancedNode = { value: 1, left: null, right: null }
// var unbalancedNode = {
//     value: 11,
//     left: { value: 0, left: null, right: null },
//     right: { value: 0, left: null, right: { value: 1, left: null, right: null } }
// };


//     const numbers = [];
//  function sumTheTreeValues(root) {
//     const values = Object.values(root);
//     for (const value of values) {
//         if (value === null ) {
//             continue;
//         }
//         if (typeof value === 'number') {
//             numbers.push(value);
//         }
//         if (typeof value === 'object') {
//             sumTheTreeValues(Object.values(value))
//         }
//     }
//     return numbers.reduce((akk, curr) => akk + curr,0);
//  }
// console.log(sumTheTreeValues(unbalancedNode));

//---------------------- 2 ---------------------//Object depth
//Напишите функцию JavaScript, которая возвращает глубину объекта.

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
//console.log(depth({ a: 1, b: { c: 2 } }));
// console.log(depth({a: 1, c: { w: 3 }, b: { c: 2, g: 5, f: { k: 5, l: 6 } }, }));

//---------------------- 3 ---------------------//Tree Depth
// Напишите метод, который принимает вложенный объектв качестве входных данных
//  и возвращает этот объект с добавленными ключами «глубины».

// let counter = 0;
// function recordDepth(tree) {
//     if (tree === null || Array.isArray(tree) || typeof tree !== 'object') {
//         return null;
//     }
//     tree.depth = counter;
//     const values = Object.values(tree);
//     for (const value of values) {
//       if (value !== null && !Array.isArray(value) && typeof value === 'object') {
//           counter += 1;
//             recordDepth(value);
//         }
//     }
//     return tree;
// }
// console.log(recordDepth({ }));
// console.log(recordDepth({ a1: 1, a2: 2, a: { b: { c: [Object] } } }));
//console.log(recordDepth({ a: 1, b: 2, c: { d: 3, a: { c: 4} } }));



//---------------------- 4 ---------------------//