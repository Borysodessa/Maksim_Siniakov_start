//----------------------- 1 --------------------//Name That Integer
// Напишите метод detect_int, который возвращает первое положительное целое число,
// для которого произвольное число лямбда - выражений возвращает значение true.
// Если аргументы не переданы, то detect_intдолжен вернуть 1.

// function detectInt(...fns) {
//     let x = 1;

//     while (true) {
//         if (fns.every(fn => fn(x))) {
//             return x;
//         }
//         x += 1;
//     }
// }

// const lam1 = (x) => x ** 0.5 % 1 == 0;
// const lam2 = (x) => x > 9;
// console.log(detectInt(lam1, lam2));

// const fn2 = (x) => x % 6 === 0;
// const fn3 = (x) => x.toString().length >= 2;

// console.log(detectInt(fn1, fn2, fn3)); // 12
// console.log(detectInt(fn1, fn2)); // 6
//=======================================================================================================

//----------------------- 2 --------------------//zipWith
// zipWithберет функцию и два массива и объединяет массивы вместе, применяя функцию к каждой паре значений.
// Значением функции является один новый массив.Если массивы имеют неравную длину, вывод будет такой же
// длины, как и более короткий.

// function repeat(a, i) {
//     return a.repeat(i + 1);
// }
// console.log(repeat("a", 0));

// function zipWith(fn, a0, a1) {
//     const length = Math.min(a0.length, a1.length);

//     const arr = [];
//     for (let i = 0; i < length; i += 1) {
//         arr.push(fn(a0[i], a1[i]));
//     }
//     return arr;
// }
// console.log(zipWith(Math.max, [1, 4, 7, 1, 4, 7], [4, 7, 1, 4, 7, 1]));
//console.log(zipWith(repeat, ["a", "b", "c", "d", "e", "f"], []));
//==============================================================================================

//----------------------- 3 --------------------//Functional Addition
//Создайте функцию add(n), которая возвращает функцию, которая всегда добавляет n к любому числу.

// const add = (n) => {
//     return (a) => {
//         return a + n;
//     };
// };

// function add(n) {
//     return (a) => {
//         return a + n;
//     };
// }
//console.log(add(3)(2));
//==========================================================================================================

//----------------------- 4 --------------------//Currying functions: multiply all elements in an array
// создать функцию multiplyAll которая принимает в качестве аргумента массив целых чисел.
//  Эта функция должна возвращать другую функцию, которая принимает одно целое число в качестве аргумента и
//возвращает новый массив.
// Возвращаемый массив должен состоять из каждого элемента из первого массива, умноженного на целое число.

// function multiplyAll(a) {
//     return (b) => {
//         return a.map((el) => el * b);
//     };
// }
// console.log(multiplyAll([1, 2, 3])(2));
//==============================================================================================================

//----------------------- 5 --------------------// Chain me
//Напишите универсальную цепочку функций, которая принимает начальное значение и массив функций для его выполнения
// function chain(input, fs) {
//     let a = input;
//     for (const fn of fs) {
//         a = fn(a);
//     }
//     return a;
// }

// const double = (x) => x * 2;
// const sq = (x) => x * x;
// const divide = (x) => x / 2;
// console.log(chain(3, [double, sq, divide])); // 3   →   6 → 36 → 18
//==========================================================================

//----------------------- 6 --------------------//7 kyu The Span Function
// Он принимает последовательность и функцию - предикат и возвращает две
// последовательности.Первая последовательность содержит все элементы
// последовательности аргументов до элемента, вызвавшего первую ошибку
// предиката.Вторая возвращенная последовательность содержит остальную
// часть исходной последовательности.Исходная последовательность не изменена.
//console.log([13, 17, 19, 11, 21].slice(0, 0));
// function isEven(x) {
//     return Math.abs(x) % 2 === 0;
// }
// function isOdd(x) {
//     return Math.abs(x) % 2 !== 0;
// }
// function span(arr, predicate) {
//     const array = [[], []];
//     if (arr.every((el) => predicate(el))) {
//         array[0] = [...arr];
//     }
//     for (let i = 0; i < arr.length; i += 1) {
//         if (!predicate(arr[i])) {
//             array[0] = [...arr.slice(0, i)];
//             array[1] = [...arr.slice(i)];
//             break;
//         }
//     }
// return array;
// }
// console.log(span([13, 17, 19, 11, 21], isOdd));

//----------------------- 7 --------------------//The dropWhile Function
// есть последовательность значений и некоторый предикат для этих значений.
//  Вы хотите удалить самый длинный префикс элементов, чтобы предикат был
//   истинным для каждого элемента.Мы назовем это функцией dropWhile

function isEven(num) {
    return num % 2 === 0;
}

function dropWhile(arr, pred) {
    const array = [[]];
    let counter = 0;
    for (const el of arr) {
        if (pred(el)) {
            console.log(counter);
            array[counter].push(el);
        }
        if (!pred(el)) {
            array.push([]);
            counter += 1;
        }
    }
    return array;
}
//                          4         1     1     1
console.log(dropWhile([2, 4, 6, 8, 1, 2, 5, 4, 3, 2], isEven));

//----------------------- 8 --------------------//6 kyu Function composition

// const addOne = (a) => a + 1;
// const multTwo = (b) => b * 2;

// function compose(...fns) {
//     return (num) => {
//         return fns.reverse().reduce((akk, fn) => fn(akk), num);
//     };
// }
// console.log(compose(multTwo, addOne)(5));
