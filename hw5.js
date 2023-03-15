                    //Рекурсии
//---------------------- 1 ---------------------//Sum The Tree  у меня 12 kw пишет что у меня 25
// написать функцию, которая возвращает сумму всех значений, включая
// корень.Отсутствие узла будет указано со nullзначением.

// const unbalancedNode = { value: 1, left: null, right: null }
// var unbalancedNode = {
//     value: 11,
//     left: { value: 0, left: null, right: null },
//     right: { value: 0, left: null, right: { value: 1, left: null, right: null } }
// };

   
// function sumTheTreeValues(root) {
//     if(root === null){return 0}
//     let numbers = 0;
//     numbers += root.value;
//     numbers += sumTheTreeValues(root.left);
//     numbers += sumTheTreeValues(root.right);
//     return numbers;
// }
// console.log(sumTheTreeValues(unbalancedNode));
//==================================================================================

//---------------------- 2 ---------------------//Object depth
//Напишите функцию JavaScript, которая возвращает глубину объекта.

// function depth(obj) {
//     if (typeof obj !== "object" ||obj === null || Object.keys(obj).length === 0 || Array.isArray(obj)) {
//         return 0;
//     }
//     const values = Object.values(obj);
//     const depths = values.map(value => depth(value));
//     return Math.max(...depths) + 1;
// }
// console.log(depth({ a: 1, b: { c: 2 } }));
//console.log(depth({a: 1, c: { w: 3 }, b: { c: 2, g: 5, f: { k: 5, l: 6 } }, }));
//=======================================================================================

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
// //console.log(recordDepth({ }));
// console.log(recordDepth({ a1: 1, a2: 2, a: { b: { c: [Object] } } }));
// console.log(recordDepth({ a: 1, b: 2, c: { d: 3, a: { c: 4} } }));



//---------------------- 4 ---------------------//Fun with trees: max sum
// дано бинарное дерево.Реализуйте метод maxSum,
// который возвращает максимальную сумму маршрута от корня к листу.

// Вам доступен класс TreeNode:
// var TreeNode = function(value, left, right) {
//   this.value = value;
//   this.left = left;
//   this.right = right;
// };

//---------------------- 5 ---------------------//Smart Sum
//написать функцию smartSum, которая возвращает сумму произвольного числа аргументов.
// const sum = [];
// function smartSum(...args) {
    
//     for (const arg of args) {
        
//         if (typeof arg === 'number') {
//             sum.push(arg);
//         } else {
//             smartSum(...arg);
//         }
//     }
//     return sum.reduce((akk, curr) => akk + curr,0);
// }
//console.log(smartSum(1,2,[[3,4],5],6));
//console.log(smartSum(3, [1, [2, 5]]));

//---------------------- 6 ---------------------//Persistent Bugger.??????????

// let counter = 0;
// function persistence(num) {
//     if (num < 9) { return counter };
//     counter += 1;
//     mul = num.toString().split('').map(el => Number(el)).reduce((akk, curr) => akk * curr, 1);
//     if (mul > 9) {
//        // counter +=1 
//         persistence(mul); 
//     }
//     return counter;
// }
// console.log(persistence(14));

//---------------------- 7 ---------------------//Учитывая n, возьмите сумму цифр n.
//  Если это значение имеет более одной цифры, продолжайте уменьшать таким образом,
//     пока не будет получено однозначное число.Ввод будет неотрицательным целым числом.
// let mul = 0;
// function digitalRoot(n) { 
//     mul = n.toString().split('').map(Number).reduce((akk, curr) => akk + curr, 0);
   
//     if (mul > 9) {
//         digitalRoot(mul);
//     }
//     return mul;
// }
// console.log(digitalRoot(465));