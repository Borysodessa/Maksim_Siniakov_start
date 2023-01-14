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

//     // ["+++", "+++", "+++"].join("\n")                        перенос "\n"
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
//         .map(Number)                                                      !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
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
//         .filter(i => "A" <= letters[i] && letters[i] <= "Z");     //сравнение на букву
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
                       
                            //--------------- task14 ----------//
//    Учитывая двумерный массив, вернуть новый массив, который переносит только те массивы из
// оригинала, которые не были пустыми и элементы которых все одного типа(т.е.однородные).Для простоты
//  массивы внутри массива будут содержать только символы и целые числа.
// Пример:
// Учитывая [[1, 5, 4], ['a', 3, 5], ['b'], [], ['1', 2, 3]], ваша функция должна возвращать [[1, 5, 4], ['б']].
// Приложение:
// Пожалуйста, имейте в виду, что для этого ката мы предполагаем, что пустые массивы неоднородны.
// Результирующие массивы должны быть в том порядке, в котором они были изначально, и их значения не должны изменяться.
// Неявное приведение типов не допускается. Подмассив [1, '2'] будет считаться недопустимым и должен быть отфильтрован.

// function isHomogenous(arr) {
//     return arr.every(a => typeof a === typeof arr[0]);
// }

// function filterHomogenous(arrays) {
//    return arrays.filter(arr => arr.length !== 0 && isHomogenous(arr));
//} 
// console.log(filterHomogenous([[1, 5, 4], ['a', 3, 5], ['b'], [], ['1', 2, 3]]));

          //--------------------------- task15 -------------------------//
              
//               Учитывая массив положительных целых чисел(веса людей), верните новый массив / кортеж из двух целых
// чисел, где первое — это общий вес команды 1, а второе — общий вес команды 2.
              
//function rowWeights(array){
//     const sum1 = array
//         .filter((_, i) => i % 2 !== 0)                 // если аргумент не используется то ставят _
//         .reduce((sum, element) => sum + element, 0);
    
//     const sum2 = array
//         .filter((_, i) => i % 2 === 0)
//         .reduce((sum, element) => sum + element, 0);
//     return [sum2, sum1];
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

// function isMiniWin(str, code) {                                           // predicate функция возвращающая буль
//     const targetCharacter = String.fromCharCode(code);
//     return str.split('').includes(targetCharacter);
// }
// if (str.split('').includes(targetCharacter)) {
//     return true;
// }
// return false;
     
// function bingo(ticket, win) {
//     const winningMiniTikets = ticket.filter(([str, code]) => isMiniWin(str, code))
//     return winningMiniTikets.length >= win ? 'Winner!' : 'Loser!'
    
    // if (winningMiniTikets.length >= win) {
    //     return 'Winner!';
    // }
    // return 'Loser!';
//}

//завершить функцию, которая принимает строку и возвращает массив со всеми
// возможными поворотами данной строки в верхнем регистре.
     
// function scrollingText(rawText) {
//     let text = rawText.toUpperCase()
//     const scrollText = [];
//     for (let i = 0; i < rawText.length; i++) {
//         scrollText.push(text.toUpperCase());
//         text = text.slice(1) + text[0];
//     }
//     return scrollText;
//}
// console.log(scrollingText('abc'));

//  function scrollingText(text) { 
//      const arr = text
//          .split('')
//          .map((el, i) => text.toUpperCase().slice(i) + text.toUpperCase().slice(0, i));
//      return arr;
// }
// console.log(scrollingText('abc'));


//-------------------------task 18-----------------------//

//дано число, и вам нужно будет вернуть его в виде строки в расширенной форме

// function expandedForm(num) {
//     return String(num)
//         .split('')
//         .reverse()
//         .map((el, i) => el + '0'.repeat(i))
//         .filter(el => !el.startsWith("0")) // "0000"      //startsWith
//         .reverse()
//         .join(' + ');
// }
// console.log(expandedForm(50026));


//------------------------- task 19 -----------------------//
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

//----------------------- 20 ------------------------//
// Учитывая число в качестве параметра(от 2 до 30), вернуть
// массив, содержащий строки, которые образуют поле.

// function box(n) {
//   const baseString = '-'.repeat(n); 
//   const substrings = '-' + ' '.repeat(n-2) + '-'; 
//   const strings = Array(n - 2).fill(substrings);
//   strings.push(baseString); 
//   strings.unshift(baseString);
//   return strings;
// }
//  console.log(box(10));


//----------------------- 21 ------------------------//

// Магический индекс в массиве A[1...n - 1] определяется как такой индекс,
//     что A[i] = i.Учитывая отсортированный массив различных целых чисел,
//     напишите метод для поиска магического индекса, если он существует,
//         в массиве A.

// function findMagic(arr){
//     return arr.findIndex((elem, i) => elem === i);
// }
//  console.log(findMagic([6, 5, 4, 3,18])); // 2

//----------------------- 22 ------------------------// не проверенно: else, вторая функция.  

// Функция rgb неполная.Завершите его, чтобы передача десятичных значений RGB
// приводила к возврату шестнадцатеричного представления.Допустимые десятичные
// значения для RGB: 0–255. Любые значения, выпадающие из этого диапазона, должны
//  быть округлены до ближайшего допустимого значения.
//     Примечание.Ваш ответ всегда должен состоять из 6 символов, сокращение с 3
//  здесь не сработает.

// function convert(a) {
//      if (a > 255) {
//           a = 255
//      } 
//         if (a < 0) {
//           a = 0
//       }
//      return a.toString(16).padStart(2, 0);
// }

// function rgb(r, g, b) {
//     return [r, g, b]
//         .map(value => convert(value))
//         .join('')
//         .toUpperCase();
// }
// console.log(rgb(255, 0, 12));
//=========================================================================================================================
//=--------------23------------------------//
// Учитывая двумерный массив целых чисел, вернуть сглаженную версию массива со всеми
// целыми числами в отсортированном(по возрастанию) порядке
// function compareNumeric(a, b) {
//     // if (a > b) return 1;
//     // if (a === b) return 0;
//     // if (a < b) return -1;

//     return a - b;
// }
// function flattenAndSort(array) {
//     return array
//         .reduce((arr, elem) => {
//             arr.push(...elem);
//             return arr;
//         }, [])
//         // .reduce((arr, elem) => arr.concat(elem), [])
//         // .flat()
//         // .sort(compareNumeric);
//         .sort((a, b) => a - b);
//     }
// console.log(flattenAndSort([[3, 2, 100, 1], [4, 6, 5], [], [9, 7, 8]]));
//==========================================================================//

//----------------------- 24 ------------------------//

// Напишите функцию, которая принимает массив чисел(целые числа для тестов) и целевое.
// Он должен найти в массиве два разных элемента, которые при суммировании дают целевое значение
//  целевое значение. Затем индексы этихэлементов должны быть возвращены в виде 
// списка(в зависимости от вашего языка) следующим образом: (index1, index2).

// function twoSum(numbers, target) {
//      for (let i = 1; i < numbers.length; i += 1) {
//           console.log("----", numbers[i]);
//           for (let j = 0; j < i; j += 1){
//                if (numbers[i] + numbers[j] === target) {
//                     return  [i, j];  
//                }
//           }
//      }
// }
// console.log(twoSum([1, 2, 3, 4, 5, 3], 4));
//=========================================================================================================================

// ----------------------- 25 ------------------------//
//  Массив называется нулевым, если он содержит несколько нулей, и каждая 
//  последовательность нулей состоит не менее чем из 4 элементов.
//  Ваша задача — вернуть количество нулевых последовательностей, если
//   заданный массив нулевой, иначе 0.

// function zeroPlentiful(arr) {
//      const array = [];
//      let counter = 0;
//      for (let i = 0; i < arr.length; i += 1){
//           if (arr[i] === 0) {
//                counter += 1;
//           } else { 
//                counter = 0;
//           }
//           array.push(counter);
//      }
//      const numbersOne = array.filter(num => num === 1).length; 
//      const numbersFour = array.filter(num => num === 4.length); 
//      if (numbersOne !== numbersFour) {
//           return 0;
//      }
//      return numbersFour;
// }
// console.log(zeroPlentiful([0, 2, 0, 0, 0, 0, 3, 4, 5, 0, 0, 0, 0, 0]));
//====================================================================================================//

                    //----------------------- 26 ------------------------//Length of missing array 
//  Вы получаете массив массивов.
// Если вы отсортируете массивы по их длине, вы увидите, что их значения длины следуют друг за другом.
// Но одного массива не хватает!

// const isNullOrEmpty = el => el === null || el.length === 0;

// function getLengthOfMissingArray(arrayOfArrays) {
//     if (isNullOrEmpty(arrayOfArrays) || arrayOfArrays.some(isNullOrEmpty)) { 
//         return 0;
//     }
    
//     const lengths = arrayOfArrays.map(a => a.length).sort((a, b) => a - b);
//     for (let i = 0; i < lengths.length - 1; i += 1) {
//         if(lengths[i] !== lengths[i + 1] - 1) {
//             return lengths[i] + 1;
//         } 
//     }
// }
// console.log(getLengthOfMissingArray(null))
// console.log(getLengthOfMissingArray([]))
// console.log(getLengthOfMissingArray([[1, 1], null, [1, 1, 1, 1]]))
// console.log(getLengthOfMissingArray([[1, 1], [], [1, 1, 1, 1]]))

//  console.log(getLengthOfMissingArray( [[1, 2], [4, 5, 1, 1], [1], [5, 6, 7, 8, 9]]));
//  console.log(getLengthOfMissingArray([[], [2], [2, 0, 3, 4, 4, 3, 3], [4, 2], [2, 4, 4, 1], [1, 0, 4, 1, 0, 0], [4, 0, 1, 2, 0]]));
//     console.log(getLengthOfMissingArray([]));
//     console.log(getLengthOfMissingArray([[null], [null, null, null]])); // 2
//  console.log(getLengthOfMissingArray([[]]));
//==============================================================================================================
//----------------------- 27 ------------------------//
// Поток данных получен и должен быть реверсирован.Каждый сегмент имеет длину 8 бит, что
// означает, что порядок этих сегментов должен быть обратным, например:

// function dataReverse(data) {
//      const reverse = [];
//      for (let i = 0; i < data.length / 8; i += 1) {
//           reverse.unshift(data.slice(i * 8, (i + 1) * 8))
//           }
//     return reverse.flat();
// }
// console.log(dataReverse([4, 4, 4, 4, 4, 4, 4, 4, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0]));
//==============================================================================================================//
//----------------------- 28 ------------------------//   ?
// преобразовать строку в новую строку, где каждый символ в новой строке соответствует тому, "("если этот символ появляется
// только один раз в исходной строке или ")"если этот символ появляется в исходной строке более одного раза.Игнорировать
// заглавные буквы при определении, является ли символ дубликатом.

// function duplicateEncode(word) {
//      return word
//           .toLowerCase()
//           .split('')
//           .map((letter, _i, arr) => arr.filter(simbol => simbol === letter).length)
//           .map(count => count === 1 ? '(' : ')')
//           .join('');
// }
// console.log(duplicateEncode('recede'));
//==========================================================================================================//
     
     //----------------------- 29 ------------------------//
// Получив строку, сделайте заглавными буквы, которые занимают четные и нечетные индексы отдельно,
//      и верните, как показано ниже. Индекс 0 будет считаться четным.

// function even(s) {
//      return s
//           .split('')
//           .map((letter, i) => i % 2 === 0 ? letter.toUpperCase() : letter)
//           .join('');
// }

// function odd(s) {
//      return s
//           .split('')
//           .map((letter, i) => i % 2 !== 0 ? letter.toUpperCase() : letter)
//           .join('');
// }

// function capitalize(s) {
//       return [even(s), odd(s)];
// }
// console.log(capitalize("abcdef"));
//============================================================================================//

//----------------------- 30 ------------------------//
// Вы должны отсортировать нечетные числа в порядке возрастания, оставив четные числа на их исходных позициях.

// function sortArray(array) {
//      const odd = array.filter(el => el % 2 !== 0).sort((a, b) => a - b);
//      let counter = 0;
//      for (let i = 0; i < array.length; i += 1) {
//           if (array[i] % 2 !== 0) {
//                array[i] = odd[counter];
//                counter += 1
//           }
//      }
//      return array;
// }
// console.log(sortArray([5, 8, 6, 3, 4]));
// console.log(sortArray([9, 8, 7, 6, 5, 4, 3, 2, 1, 0]));
//==============================================================================================================//

//----------------------- 31 ------------------------//

// а) удалить орфографические ошибки в словах «ei».(Пример слов: their, caffeine, deceive, weight)
// б) использовать только первую букву каждого предложения.Убедитесь, что остальная часть предложения
//  написана строчными буквами.
//  Example: He haD iEght ShOTs of CAffIEne. --> He had eight shots of caffeine.

// function proofread(str) {
//         return str
//             .toLowerCase()
//             .replaceAll('ie', 'ei')
//             .split('. ')
//             .map(word => word[0].toUpperCase() + word.slice(1))
//             .join('. ');
// } 
// console.log(proofread ("ShE deCIeved deCIeved HiM. ShE deCIeved deCIeved HiM. ShE deCIeved deCIeved HiM."));
//==============================================================================================================
//----------------------- 32 ------------------------// Format a string of names like "Bart, Lisa & Maggie"
// Дано: массив, содержащий хэши имен
// Возврат: строка, отформатированная как список имен, разделенных запятыми, за
//  исключением двух последних имен, которые должны быть разделены амперсандом.

// function list(names){
//     const arr = names.map(name => name.name);               
//     const recentElements = arr.slice(- 2); 
//     if (recentElements.length > 1) { 
//         recentElements.splice(-1, 0, '&')};              
//     const str = recentElements.join(' ');                  
//     const array = arr.slice(0, -2);                  
//     array.push(str);                                      
//     return array.join(', '); 
// }
// console.log(list([{ name: 'Gart' }, {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'}]));


//----------------------- 33 ------------------------//Simple Fun #79: Delete a Digit
//Для заданного целого числа n найдите максимальное число, которое можно получить, удалив ровно одну цифру данного числа.

// function deleteDigit(n) {
//     const arr = String(n).split('');
//     return Math.max(...arr.map((_, i) => [...arr.slice(0, (arr.length - i) - 1), ...arr.slice(arr.length - i)])
//         .map(el => el.reduce((acc, current) => acc + current)));
// }
// console.log(deleteDigit(1234));
//============================================================================================================

//----------------------- 34 ------------------------//( Equal Sides Of An Array)
// Дан массив целых чисел.Ваша задача состоит в том, чтобы взять этот массив и найти индекс
// N, где сумма целых чисел слева от N равна сумме целых чисел справа от N.Если такого 
// индекса нет, верните - 1.

// function findEvenIndex(arr) {

//     return arr.findIndex((_, i)=> {
//         const left = arr.slice(0, i).reduce((acc, el) => acc + el, 0);
//         const right = arr.slice(i + 1).reduce((acc, el) => acc + el, 0);
//         return left === right;
//     });
//   }
//      console.log(findEvenIndex([1, 2, 3, 4, 3, 2, 1]));
//=========================================================================================
//----------------------- 35 ------------------------// Easy Balance Checking
// function balance(book) {
//     const [firstLine, ...lines] = book
//         .replace(/[^0-9a-z. \n]/gi, "")
//         .split("\n")
//         .filter(el => el !== '');
                                           
//     const originalBalance = Number(firstLine);     
//     let balance = originalBalance;
//     const array = [];

//     for (const line of lines) {     
//         const [id, title, priceStr] = line.split(' ');
//         const price = Number(priceStr)
//         balance -= price;
//         array.push(`${id} ${title} ${price.toFixed(2)} Balance ${balance.toFixed(2)}`);
//     }

//     const totalExpense = originalBalance - balance;
//     const averageExpense = totalExpense / lines.length;
                                                        
//     array.unshift(`Original Balance: ${originalBalance.toFixed(2)}`); 
//     array.push(`Total expense  ${totalExpense.toFixed(2)}`);
//     array.push(`Average expense  ${averageExpense.toFixed(2)}`);

//     return array.join('\r\n');
// }

// console.log(balance ( `1000.00!=

// 125 Market !=:125.45
// 126 Hardware =34.95
// 127 Video! 7.45
// 128 Book :14.32
// 129 Gasoline ::16.10
// `))
//=================================================================================================//

//----------------------- 36 ------------------------// Birthday I - Cake
// Номера свечей на торте (candles)  maxCandles=1000. Если количество упавших
// свечей превышает 70 % от общего числа свечей, ковер загорится.вычислите количество свечей,
// которые выпадут из предоставленной строчной строки(debris).Вы должны сложить код ASCII
// каждого символа с четным индексом(предположим, что индексация начинается с 0) в строке с
// алфавитной позицией("a" = 1, "b" = 2 и т.д.) каждого символа с нечетным индексом, чтобы
//  получить общее количество строк.
// "abc"  -->  "a" = 97, "b" = 2, "c" = 99  -->  total = 198
// Если ковер загорится, верните "Fire!", если нет, верните "That was close!".

// function isAlphabetNumber(letter) {
//    return 'abcdefghijklmnopqrstuvwxyz'.indexOf(letter) + 1;
// } 
// function cake(x, y) { 
//     const score = y
//         .split('')
//         .map((letter, i) => i % 2 === 0 ? letter.charCodeAt() : isAlphabetNumber(letter))
//         .reduce((akk, number) => akk + number, 0)

//     return score  < x * 0.7 ? "That was close!" : "Fire!";
// }
// console.log(cake(389, 'cdeuo'));

//----------------------- 37 ------------------------// (Element equals its index)??????????????(это заняло слишком много времени)
// Учитывая отсортированный массив различных целых чисел, напишите функцию
// indexEqualsValue, которая возвращает наименьший индекс, для которого array[index] === index.
// Возврат, -1если такого индекса нет.

// function indexEqualsValue(a) {
//     const res = Math.min(...(a.filter((el, i) => el === i)));
//     return (a.length === 0 || !isFinite(res) ? -1 : res);
// }

// function indexEqualsValue(a) {
//     return a.filter((num, i) => i === num).length > 0 ? Math.min(...a.filter((num, i) => i === num)) : -1;
// }
//  console.log(indexEqualsValue([-8,0,2,5]));

//----------------------- 38 ------------------------//Sort by Last Char
// Учитывая строку слов(x), вам нужно вернуть массив слов, отсортированных в алфавитном порядке по последнему 
// символу в каждом.Если два слова имеют одинаковую последнюю букву, возвращаемый ими массив должен 
//отображать их в том порядке, в котором они появились в данной строке.

// function last(x) {
//     let arr = [];
//     const words = x.split(' ');
//     const numberOfEmpty = words.filter(word => word === '');
//     const sortedWords = words
//         .filter(word => word !== '') 
//         .sort((a, b) => a[a.length - 1].charCodeAt() - b[b.length - 1].charCodeAt());
//     return arr = [...numberOfEmpty, ...sortedWords];
// }
// console.log(last('    '));

//----------------------- 39 ------------------------// Sort array by string length
// function sortByLength (array) {
//     return array.sort((a, b) => a.length - b.length);
// };
// console.log(sortByLength (["Telescopes", "Glasses", "Eyes", "Monocles"]));
//==========================================================================================

//----------------------- 40 ------------------------// Valid Parentheses
// Напишите функцию, которая принимает строку скобок и определяет, допустим ли порядок скобок.Функция должна
//  возвращать true значение, если строка действительна и false недействительна.
//.replace(/[^0-9a-z. \n]/gi, "")
// function validParentheses(parens) {
//     let sum = 0;
//     for (let i = 0; i < parens.length; i += 1){
//         if (sum < 0) return false;
//         parens[i] === '(' ? sum += 1 : sum -= 1
//     }
//     return sum === 0;
// }
// console.log(validParentheses('(()())(((())))'));

