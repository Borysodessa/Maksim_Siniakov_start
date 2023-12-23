//Рекурсии
//---------------------- 1 ---------------------//Sum The Tree
// написать функцию, которая возвращает сумму всех значений, включая
// корень. Отсутствие узла будет указано со null значением.

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

// function recordDepth(tree, counter = 0) {
//     if (tree === null || Array.isArray(tree) || typeof tree !== "object") {
//         return null;
//     }
//     tree.depth = counter;
//     const values = Object.values(tree);
//     for (const value of values) {
//         recordDepth(value, counter + 1);
//     }
//     return tree;
// }
// console.log(recordDepth({}));
// console.log(recordDepth({ a1: 1, a2: 2, a: { b: { c: [Object] } } }));
// console.log(recordDepth({ a: 1, b: 2, c: { d: 3, a: { c: 4 } } }));

//---------------------- 4 ---------------------//Fun with trees: max sum
// дано бинарное дерево.Реализуйте метод maxSum,
// который возвращает максимальную сумму маршрута от корня к листу.

// Вам доступен класс TreeNode:

// var TreeNode = function (value, left, right) {
//     this.value = value;
//     this.left = left;
//     this.right = right;
// };
// const tree = {
//     value: 5,
//     left: {
//         value: -22,
//         left: {
//             value: 9,
//             left: null,
//             right: null,
//         },
//         right: {
//             value: 50,
//             left: null,
//             right: null,
//         },
//     },
//     right: {
//         value: 11,
//         left: {
//             value: 9,
//             left: null,
//             right: null,
//         },
//         right: {
//             value: 2,
//             left: null,
//             right: null,
//         },
//     },
// };

// function maxSum(root) {
//     if (!root) {
//         return 0;
//     }
//     let left = maxSum(root.left);
//     let right = maxSum(root.right);
//     return root.value + Math.max(left, right);
// }
// console.log(maxSum(tree));

//  *      5
//  *    /   \
//  *  -22    11
//  *  / \    / \
//  * 9  50  9   2
//  */

//---------------------- 5 ---------------------//Smart Sum
//написать функцию smartSum, которая возвращает сумму произвольного числа аргументов.

// const smartSum = (...args) => {
//     let sum = 0;
//     for (const arg of args) {
//         // if(Array.isArray(arg)) {
//         //     sum += smartSum(...arg)
//         // } else {
//         //     sum += arg
//         // }
//         sum += Array.isArray(arg) ? smartSum(...arg) : arg;
//     }
//     return sum;
// };
// console.log(smartSum(1, 2, [[3, 4], 5], 6));
// console.log(smartSum(3, [1, 5]));

//---------------------- 6 ---------------------//Persistent Bugger.??????????
// напишите функцию, persistence которая принимает положительный параметр num и
// возвращает его мультипликативную постоянyю , то есть количество раз,
//     которое вы должны умножить на цифры, num пока не получите одну цифру.

// function persistence(num) {
//     if (num < 10) {
//         return 0;
//     }

//     const number = num
//         .toString()
//         .split("")
//         .reduce((akk, cur) => akk * +cur, 1);

//     return 1 + persistence(number);
// }

// console.log(persistence(39));
// console.log(persistence(999));
// console.log(persistence(4));

//---------------------- 7 ---------------------//Учитывая n, возьмите сумму цифр n.
//  Если это значение имеет более одной цифры, продолжайте уменьшать таким образом,
//     пока не будет получено однозначное число. Ввод будет неотрицательным целым числом.

// function digitalRoot(n) {
//     if (n < 10) {
//         return n;
//     }
//     const num = n
//         .toString()
//         .split("")
//         .map((el) => Number(el))
//         .reduce((akk, curr) => akk + curr, 0);

//     return digitalRoot(num);
// }
// console.log(digitalRoot(4659));

//---------------------- 8 ---------------------//Happy Numbers
// написать программу, которая выведет список всех счастливых
// чисел от 1 до x(оба включительно)
// function happy(x, array = []) {
//     let sum = 0;
//     if (x === 1) {
//         return true;
//     }

//     if (array.includes(x)) {
//         return false;
//     }
//     array.push(x);
//     const arr = x
//         .toString()
//         .split("")
//         .map((el) => Number(el));

//     for (let i = 0; i < arr.length; i += 1) {
//         sum += arr[i] ** 2;
//     }

//     return happy(sum, array);
// }

// console.log(">>>", happy(326));
// console.log(">>>", happy(300));

// '708' "711" 713 714 715 719

//---------------------- 9(711) ---------------------//Sum squares of numbers in list that may contain more lists
// function SumSquares(...l) {
//     let sum = 0;
//     for (const el of l) {
//         sum += typeof el === "number" ? el ** 2 : SumSquares(...el);
//     }
//     return sum;
// }
// console.log(SumSquares([1, 2, 3]));

//---------------------- 9(714) ---------------------//Flatten a Nested Map
// const input = {
//     a: {
//         b: {
//             c: 12,
//             d: "Hello World",
//         },
//         e: [1, 2, 3],
//     },
// };

// function isObject(value) {
//     return typeof value === "object" && value !== null && !Array.isArray(value);
// }

// function flattenMap(obj, path = []) {
//     const flatMap = {};
//     for (const key in obj) {
//         const pathWithKey = [...path, key];
//         const value = obj[key];
//         if (isObject(value)) {
//             const nestedMap = flattenMap(value, pathWithKey);
//             Object.assign(flatMap, nestedMap);
//         } else {
//             flatMap[pathWithKey.join("/")] = value;
//         }
//     }
//     return flatMap;
// }
// console.log(flattenMap(input));
// for (let i = 0; i < keys.length; i += 1) {
//     const value = obj[keys[i]];
//     const fullKey = path ? `${path}/${keys[i]}` : keys[i];
//     if (typeof value === "object" && value !== null) {
//         if (Array.isArray(value)) {
//             flatMap[fullKey] = value;
//         } else {
//             const nestedMap = flattenMap(value, fullKey);
//             Object.assign(flatMap, nestedMap);
//         }
//     } else {
//         flatMap[fullKey] = value;
//     }
// }

//     return flatMap;
// }
// while (i < keys.length) {
//     const value = obj[keys[i]];
//     const fullKey = path ? `${path}/${keys[i]}` : keys[i];
//     if (typeof value === "object" && value !== null) {
//         if (Array.isArray(value)) {
//             flatMap[fullKey] = value;
//         } else {
//             const nestedMap = flattenMap(value, fullKey);
//             Object.assign(flatMap, nestedMap);
//         }
//     } else {
//         flatMap[fullKey] = value;
//     }
//     //     i += 1;
//     }
//     return flatMap;
// }

//console.log(flattenMap(input));

// https://www.codewars.com/kata/577ce2c97a3dbd74b7000059/train/javascript
// const input = {
//       type: "union",
//       members: ["long long", "double"]
// }

const input = {
  type: "struct",
  members: [
    "int",
    "int",
    "float",
    {
      type: "union",
      members: [],
    },
  ],
}; //8
// const input = {
//     type: "struct",
//     members: [
//         1,
//         1,
//         1,   //19
//         8,
//         8,

//         {
//             type: "union",
//             members: [
//                 2, //short === 2
//                 2,//8
//                 2,  //  22
//                 8,
//                 4,
//                 4,
//                 {
//                 type: "struct",
//                     members: [
//                         4,
//                         2    //6
//                     ], // long === 4, unsigned int === 2
//                 },
//             ],
//         },
//         2 //2
//     ]
// }; // 31

// const input = {
//     type: "struct",
//     members: [
//         "unsigned char",
//         "unsigned char",
//         "unsigned char",
//         "double", //double === 8
//         "double",
//         {
//             type: "union",
//             members: [
//                 "unsigned short", //short === 2
//                 "unsigned short",
//                 "unsigned short",
//                 "long long",
//                 "float", // 8
//                 "float",
//                 {
//                     type: "struct",
//                     members: ["long", "unsigned int"], // long === 4, unsigned int === 2
//                 },
//             ],
//         },
//         "short",
//     ],
// };
// const base = {
//     'char': 1,
//     'unsigned char': 1,
//     'int': 2,
//     'short': 2,
//     'unsigned short': 2,
//     'unsigned int': 2,
//     'float': 4,
//     'long': 4,
//     'unsigned long': 4,
//     'unsigned long long': 8,
//     'double':8,
//      'long long':8
// }

// function sizeof(obj) {

//     if(typeof obj === 'string'){
//         return base[obj];
//     }
//     if (obj.type === 'struct') {
//         return obj.members.reduce((akk, cur) => akk + sizeof(cur), 0);
//     }
//     if (obj.type === 'union') {
//         if(obj.members.length === 0) { return 0 }
//         const size = obj.members.map(el => sizeof(el));
//         return Math.max(...size);
//     }
// }
// console.log(sizeof(input));

// Test.assertEquals(sizeof("char"), 1);
// Test.assertEquals(sizeof("short"), 2);
// Test.assertEquals(sizeof("int"), 2);
// Test.assertEquals(sizeof("long"), 4);
// Test.assertEquals(sizeof("long long"), 8);
// Test.assertEquals(sizeof("unsigned char"), 1);
// Test.assertEquals(sizeof("unsigned short"), 2);
// Test.assertEquals(sizeof("unsigned int"), 2);
// Test.assertEquals(sizeof("unsigned long"), 4);
// Test.assertEquals(sizeof("unsigned long long"), 8);
// Test.assertEquals(sizeof("float"), 4);
// Test.assertEquals(sizeof("double"), 8);

// function removeEveryOther(arr) {
//   return arr.filter((el, i) => i % 2 === 0);
// }
// console.log(removeEveryOther([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
// console.log(removeEveryOther(["Hello", "Goodbye", "Hello Again"]));

function pipeFix(numbers) {
  const a = [];

  for (let i = numbers[0]; i <= numbers[numbers.length - 1]; i += 1) {
    a.push(i);
  }
  return a;
}
console.log(pipeFix([1, 2, 3, 5, 6, 8, 9]));
