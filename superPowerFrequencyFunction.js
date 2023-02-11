// function frequency(arr, options) {
//     const map = new Map();
//     for (let name of arr) {
//         if (!map.has(name)) {
//             map.set(name, 1)
//         } else {
//             map.set(name, (map.get(name) + 1));
//         }
//     }
//     return Array.from(map)
// }
// console.log(1, frequency([6, 1111, 10, 12, 22, 1, 1022, 2, 2, 4, 4], {}));
// console.log(1, frequency(['Peter', 'Anna', 'Rose', 'Peter', 'Peter', 'Anna'], {}));


// if (options === undefined || options.criteria === undefined) {
//     array = arr
// } else {
//     const criteria = options.criteria
//     array = arr.map(el => criteria(el));
// }



// function frequency(arr, options = {}) {
   
// const map = new Map();
    
//     // const { criteria } = options;
//     // const array = criteria === undefined ? arr : arr.map(el => criteria(el));
//     const { criteria = x => x } = options;
//                                                                          //  x => x      !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//     const array = arr.map(el => criteria(el));
//     for (let name of array) {
//         if (!map.has(name)) {
//             map.set(name, 1)
//         } else {
//             map.set(name, (map.get(name) + 1));
//         }
//     }
//     const entries = Array.from(map);

//     if (options.compareTo === undefined) {
//         return entries.sort((a, b) => a[0] < b[0] ? -1 : 1);
//     }
//     return entries.sort((a, b) => options.compareTo(a[0], b[0], a[1], b[1]));
// }

// console.log(1, frequency([6, 1111, 10, 12, 22, 1, 1022, 2, 2, 4, 4]));
// console.log(1, frequency([6, 1111, 10, 12, 22, 1, 1022, 2, 2, 4, 4], { compareTo: () => {} }));
// console.log(1, frequency([6, 1111, 10, 12, 22, 1, 1022, 2, 2, 4, 4], {
//    criteria: number => number.toString().length
// }));
// console.log(1, frequency(['Peter', 'Anna', 'Rose', 'Peter', 'Peter', 'Anna'], {
//    criteria: x => x === "Peter" ? "male" : "female",
// }));
// console.log(frequency([1, 2, 3, 4, 5, 6, 7], { criteria: parity }));
// function isEven(number) {
//   return number % 2 === 0;
// }
// function parity(number) {
//   return isEven(number) ? 'even' : 'odd';
// }

// console.log('abc', frequency(['a', 'b', 'c', 'd', 'a', 'b', 'd', 'd'], { compareTo: alphabeticalCompare }));  
// console.log('abc', frequency([1, 10, 12, 2, 1, 10, 2, 2], { compareTo: alphabeticalCompare }));  
// function alphabeticalCompare(value1, value2) {
//     if (String(value1) < String(value2)) {
//         return -1;
//     } else if (String(value1) > String(value2)) {
//         return 1;
//     } else {
//         return 0;
//     }
// }

// console.log('frCOmp', frequency(['Anna', 'Peter', 'Rose', 'Peter', 'Peter', 'Anna'], {compareTo: frequencyCompare}));
// function frequencyCompare(value1, value2, freq1, freq2) {
//   return freq2 - freq1;
// }
























// function frequency(arr, options) {
//     const criteria = options.criteria;
//     const map = new Map();
//     for (let name of arr) {
//         if (!map.has(parity(name))) {
//             map.set(parity(name), 1);
//         } else {
//             map.set(parity(name), (map.get(parity(name)) + 1));
//         }
//     }
//     return Array.from(map);
// }
// console.log(1, frequency([1, 2, 3, 4, 5, 6, 7], {
//     criteria: parity
// }));
// function isEven(number) {
//     return number % 2 === 0;
// }

// function parity(number) {
//     return isEven(number) ? 'even' : 'odd';
// }



