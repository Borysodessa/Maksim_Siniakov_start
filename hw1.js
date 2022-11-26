// ------------------task1---------------------//
// Вы получаете массив чисел, возвращаете сумму всех положительных.

// function PositivSum(arr) {
//     const positivNumbers =  arr.filter(arrEl => arrEl > 0);
//     return positivNumbers.reduce((positivNumberSum, positivNumber) => positivNumberSum + positivNumber)
// }
//     console.log(PositivSum([1, -4, 7, 12, 50]));


                     //--------------------task2-------------------//
 //   Просто, учитывая строку слов, вернуть длину кратчайшего слова (слов).
    // function getShotesWord(str) {
    //     const words = str.split(' ');
    //     const length = words.map(word => word.length);
    //     return Math.min(...length);
    // }
    // console.log(getShotesWord("bitcoin take over the world maybe who knows perhaps"));


                       //--------------------task3-------------------//
// создайте функцию, которая берет список неотрицательных целых чисел и строк и возвращает
//  новый список с отфильтрованными числами.

// function filter_list(list) {
//   return list.filter(listItem => typeof listItem === 'number');
// }

                     //--------------------task4-------------------//
                     //возвести в квадрат каждую цифру числа и соединить их
                     
// function squareDigits(num) {
//     const squareDigitsNum = num
//         .toString()
//         .split('')
//         .map(didgit => didgit ** 2)
//         .join('')
//     // return Number(squareDigitsNum);
//     return +squareDigitsNum;
// }
//      console.log(">>>>", squareDigits(234));

                             //--------------------task5-------------------//
//  Создайте программу, которая фильтрует список строк и возвращает список, содержащий только имена ваших друзей.
// Если в имени ровно 4 буквы, можете быть уверены, что оно должно быть вашим другом! В противном случае, вы можете быть уверены, что он не...
// Пример: Input = ["Ryan", "Kieran", "Jason", "Yous"], Output = ["Ryan", "Yous"]

// function friend(friends) {
//     const filteredFriends = friends.filter(friend => friend.length === 4);
//     return filteredFriends;
// }
//     console.log(friend(["Ryan", "Kieran", "Jason", "Yous", "Olga", "Makar"]));

                           //--------------------task6-------------------//
// Верните фигуру такой же длины и ширины, как целое число. Целое число будет целым числом от 1 до 50.
// Пример: n = 3, поэтому ожидается квадрат 3x3, как показано ниже, в виде строки:
// +++
// +++
// +++

// function generateShape(integer) {
//     // let pluses = ""
//     // for (let i = 0; i < integer; i += 1){
//     //     pluses += '+';  
//     // }
//     const pluses = "+".repeat(integer);
//     // let str = '';
//     // for (let i = 0; i < integer; i += 1){
//     //     str += pluses;
//     //     if (i !== integer - 1) {
//     //         str += '\n';
//     //     }
//     // }
//     // return str;

//     return Array(integer).fill(pluses).join("\n")

//     // ["+++", "+++", "+++"].join("\n")
// }
//    console.log(generateShape(5));

//--------------------task7-------------------//
// вернуть количество гласных в заданной строке.

// function getCount(str) {
//     const vowels = ['a', 'e', 'i', 'o', 'u'];
//     const letters = str.split(''); 
//     return letters.filter(letter => vowels.includes(letter)).length
// }
//     console.log(getCount('aavafrcascwswfzcw'));


                //--------------------task8-------------------//
                // Даны положительное целое число n, записанное в виде 
// abcd... (a, b, c, d... являются цифрами), и положительное целое число p
// мы хотим найти положительное целое число k, если оно существует, такое,
//     что сумма цифр n, взятых в последовательных степенях p, равна k * n.  

// function digPow(n, p) {
//    const sum = n
//         .toString()
//         .split('')
//         .map(Number)
//         .reduce(
//             (acc, digit, i) => acc + digit ** (p + i),
//             0,
//         );
//         if (sum % n !== 0) { 
//         return -1
//     }
//     return sum / n;
// }
// console.log(digPow(695, 2));

                 //--------------------task9-------------------//
// Напишите функцию, которая может возвращать наименьшее значение массива или
// индекс этого значения.Второй параметр функции скажет, должна ли она
//  возвращать значение или индекс.
//     Предположим, что первый параметр всегда будет массивом, заполненным как
// минимум 1 числом и без дубликатов.Предположим, что вторым параметром будет
// строка, содержащая одно из двух значений: «значение» и «индекс».

//  function min(arr, toReturn) {
//      const minNumber = Math.min(...arr); 
//      if (toReturn === 'value') {
//          return minNumber;
//      }
//      return arr.indexOf(minNumber);
//  } 
// console.log(min([1, 2, 3, 4, 5], 'value'));
     
                 //--------------------task10-------------------//
// реализовать функцию разности, которая вычитает один список из другого и возвращает результат.
// Он должен удалить из списка все значения a, которые присутствуют в списке b, сохраняя их порядок.

// function arrayDiff(a, b) {
//     return a.filter(element => !b.includes(element));
// }

       //--------------------task11----------------//
//        Напишите функцию, которая принимает одну строку(word) в качестве аргумента. 
//        Функция должна возвращать упорядоченный список, содержащий индексы всех
//         заглавных букв в строке.
    
// function capitals(word) {
//     const letters = word.split('');  
//     // return Array.from(letters.entries()).filter(i => i[1] === i[1].toUpperCase()).map(i =>  i[0]);
//     return letters
//         .map((_, i) => i)
//         .filter(i => "A" <= letters[i] && letters[i] <= "Z");
// }   
// console.log(capitals('CodEWaRs'));

//--------------------------task12------------------//
// Напишите функцию, insert_dash(num)которая будет вставлять тире('-') между каждыми
//  двумя нечетными цифрами числа.Например: если число равно 454793, вывод должен 
//  быть 4547 - 9 - 3. Не считайте ноль за нечетную цифру.insertDash(num)InsertDash(int num)
// Обратите внимание, что число всегда будет неотрицательным (>= 0).

// function insertDash(num) {
//     const numberWithDash = [];
//     const arrStrings = String(num).split(''); 
//     for (let i = 0; i < arrStrings.length; i += 1) {
//         if (i > 0 && arrStrings[i-1] % 2 !== 0 && arrStrings[i] % 2 !== 0) {
//             numberWithDash.push('-');
//         }
//         numberWithDash.push(arrStrings[i]);
//     }
//     return numberWithDash.join('');
// }
//     console.log(insertDash(454793));

//============================================================================================================

           //---------------task13----------//
// Учитывая массив (arr) в качестве аргумента, завершите функцию countSmileys, которая
// должна вернуть общее количество улыбающихся лиц.
// Правила улыбающегося лица:
// Каждый смайлик должен содержать допустимую пару глаз. Глаза могут быть отмечены как :или;
// У смайлика может быть нос, но не обязательно. Допустимые символы для носа -или~
// Каждое улыбающееся лицо должно иметь улыбающийся рот, который должен быть отмечен либо значком, )либоD
// Не допускается использование дополнительных символов, кроме упомянутых.
// Примеры допустимых смайликов: :) :D ;-D :~)



 
// function countSmileys(arr) {
//     return arr.filter(str => isSmile(str)).length;
// }
// console.log(countSmileys([":---)", "))", ";~~D", ";D"]));

// function isSmile(str) {
//     const eyes = [':', ';'];
//     const mouth = ['D', ')'];
//     const nose = ['~', '-'];
//     if (str.length === 2) {
//         return eyes.includes(str[0]) && mouth.includes(str[1]);
//     }
//     if (str.length === 3) {
//         return eyes.includes(str[0]) && nose.includes(str[1]) && mouth.includes(str[2]);
//     }
//     return false;
// }

// console.log(isSmile(":)")) // true
// console.log(isSmile(":-D"))
// console.log(isSmile(":))"))
// console.log(isSmile(":"))
// console.log(isSmile(""))
// console.log(isSmile(":x")) // false
// console.log(isSmile("):")) // false
// console.log(isSmile(":))"))
// console.log(isSmile(":-Dqweerty"))

// https://en.wikipedia.org/wiki/ASCII
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt

//=======================================================================================================================================================
                       
                            //---------------task14----------//
//    Учитывая двумерный массив, вернуть новый массив, который переносит только те массивы из
// оригинала, которые не были пустыми и элементы которых все одного типа(т.е.однородные).Для простоты
//  массивы внутри массива будут содержать только символы и целые числа.
// Пример:
// Учитывая [[1, 5, 4], ['a', 3, 5], ['b'], [], ['1', 2, 3]], ваша функция должна возвращать [[1, 5, 4], ['б']].
// Приложение:
// Пожалуйста, имейте в виду, что для этого ката мы предполагаем, что пустые массивы неоднородны.
// Результирующие массивы должны быть в том порядке, в котором они были изначально, и их значения не должны изменяться.
// Неявное приведение типов не допускается. Подмассив [1, '2'] будет считаться недопустимым и должен быть отфильтрован.


// function filterHomogenous(arrays) {
//    return arrays.filter((arr => arr.length !== 0  && arr.every((a) => (typeof a) === (typeof arr[0]) )));
// } 
// console.log(filterHomogenous([[1, 5, 4], ['a', 3, 5], ['b'], [], ['1', 2, 3]]));

          //--------------------------- task15 -------------------------//
              
//               Учитывая массив положительных целых чисел(веса людей), верните новый массив / кортеж из двух целых
// чисел, где первое — это общий вес команды 1, а второе — общий вес команды 2.
              
// function rowWeights(array){
//     const sum1 = array
//         .filter((arr, i) => i % 2 !== 0)
//         .reduce((sum, element) => sum + element, 0);
    
//     const sum2 = array
//         .filter((arr, i) => i % 2 === 0)
//         .reduce((sum, element) => sum + element, 0);
//     return  [sum2, sum1];
// };
 // console.log(rowWeights([100,51,50,100]));
 
 //-----------------------task 16-----------------------//
//  Учитывая лотерейный билет(билет), представленный массивом массивов с двумя значениями, вы должны выяснить, выиграли 
//  ли вы джекпот.
// Пример билета:

// [ [ 'ABC', 65 ], [ 'HGR', 74 ], [ 'BYHT', 74 ] ]

// Для этого вы должны сначала подсчитать «мини - выигрыши» в своем билете.Каждый подмассив содержит как строку, так и число. 
// Если код любого из символов в строке совпадает с числом, вы получаете мини - выигрыш.Обратите внимание, что у вас может
//  быть только один мини - выигрыш на подмассив.
// После того, как вы подсчитали все свои мини - выигрыши, сравните это число с другим введенным значением(выигрышем).Если 
// ваша сумма больше или равна(выигрыш), верните «Победитель!». В противном случае верните «Неудачник!».
 
// function bingo(ticket, win) {
//     const b = ticket
//         .map(miniTicket => miniTicket[0]
//         .split('')
//             .filter(simbols => simbols.includes(String.fromCharCode(miniTicket[1]))))
//         .filter(c => c.length > 0);
//     if (b.length >= win) {
//         return 'Winner!';
//     }
//     return 'Loser!';
// }

//-------------------------task 17-----------------------//

//завершить функцию, которая принимает строку и возвращает массив со всеми возможными поворотами данной строки в верхнем регистре .
     
// function scrollingText(text) {
//     const scrollText = [];
//     for (letter of text) {
//         scrollText.push(text.toUpperCase());
//         text = text.slice(1) + text[0];
//     }
//     return scrollText;
// }
// console.log(scrollingText('abc'));

//  function scrollingText(text) { 
//      const arr = text
//          .split('')
//          .map((el, i) => text.toUpperCase().slice(i) + text.toUpperCase().slice(0, i));
//      return arr;
// }
// console.log(scrollingText('abc'));



//дано число, и вам нужно будет вернуть его в виде строки в расширенной форме

// function expandedForm(num) {
//     return String(num)
//         .split('')
//         .reverse()
//         .map((el, i) => el + '0'
//         .repeat(i))
//         .filter(el => el != 0)
//         .reverse()
//         .join(' + ');
// }
// console.log(expandedForm(50026));

//-------------------------task 18-----------------------//
// Является ли каждое значение в массиве массивом?
//     Это должно проверять только второе измерение массива.Значения вложенных массивов не
//  обязательно должны быть массивами.

// const arrCheck = value => {
//     const filteredValue = value.filter(el => Array.isArray(el)); 
//     if (value.length === filteredValue.length) {
//         return true
//     }
//     return false
// }
// console.log(arrCheck([]));