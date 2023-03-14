//-------------------------------1--------------------------//
//  цепочках ДНК символы «А» и «Т» дополняют друг друга, как «С» и «G». Ваша функция получает
//  одну сторону ДНК(строка, кроме Haskell); вам нужно вернуть другую дополнительную сторону.
// function DNAStrand(dna) {
//     const complimentaryValues = {
//         'A': 'T',
//         'T': 'A',
//         'C': 'G',
//         'G': 'C'
//     };
//     return dna.split('').map(el => complimentaryValues[el]).join('');
// }
// console.log(DNAStrand("ATTGC"));
//============================================================================================

//-------------------------------2--------------------------//Convert the score
// Судья выкрикнет счет, вы уже настроили модуль распознавания голоса, который превращает голос
//  судьи в строку, но голосовой счет нужно преобразовать в пару для табло!
// например "The score is four nil", должен вернуться[4,0]
// Счет любой команды имеет диапазон от 0 до 9, и судья не будет говорить одну и ту же строку
//  каждый раз, например.

// const obj = {
//     nil: 0,
//     one: 1,
//     two: 2,
//     three: 3,
//     four: 4,
//     five: 5,
//     six: 6,
//     seven: 7,
//     eight: 8,
//     nine: 9
// };
// function scoreboard(string) {
//     return string
//         .split(' ')
//         .filter(key => key in obj)
//         .map(key => obj[key]);
// }
//  console.log(scoreboard("new score: two three"));
//========================================================================================

//------------------------------- 3 --------------------------//The Office I - Outed
// Учитывая объект(meet), содержащий имена членов команды в качестве ключей и их рейтинг
// счастья из 10 в качестве значения, вам необходимо оценить общий рейтинг счастья группы.
//     Если <= 5, вернуть 'Get Out Now!'. В противном случае верните 'Nice Work Champ!'.
// Рейтинг счастья будет равен сумме баллов/количеству людей в комнате.
// Обратите внимание, что ваш босс находится в комнате(boss), его очки стоят в два раза больше,
//     чем номинальная стоимость(но он по - прежнему всего лишь один человек!).
// function outed(meet, boss) {
//     const values = Object.values(meet);
//     const points = values.reduce((points, point) => points + point, 0) + meet[boss];

//     return points / values.length <= 5 ? 'Get Out Now!' : 'Nice Work Champ!';
//   }
// console.log(outed({ 'tim': 0, 'jim': 2, 'randy': 0, 'sandy': 7, 'andy': 0, 'katie': 5, 'laura': 1, 'saajid': 2, 'alex': 3, 'john': 2, 'mr': 0 }, 'laura'));

//------------------------------- 4 --------------------------//The Office II - Boredom Score
//будет предоставлен объект (staff), содержащий имена сотрудников в качестве ключей и отдел, в
// котором они работают, в качестве значений.
//В каждом отделе есть разные баллы оценки скуки, а именно:
//В зависимости от совокупного балла команды верните соответствующее настроение:

// const points = {
// 'accounts': 1,
// 'finance': 2,
// 'canteen': 10,
// 'regulation': 3,
// 'trading': 6,
// 'change': 6,
// 'IS': 8,
// 'retail': 5,
// 'cleaning': 4,
// 'pissing about': 25
// }
// function boredom(staff){
//     const pointsBoredom = Object.values(staff)
//         .map(key => points[key])
//         .reduce((akk, points) => akk + points, 0);

//     console.log(pointsBoredom);
//     if (pointsBoredom <= 80) {
//         return 'kill me now'
//     }
//     if (pointsBoredom < 100) {
//        return 'i can handle this'
//     }
//     return'party time!!'

// }
// console.log(boredom({ tim: 'IS', jim: 'finance',
//   randy: 'pissing about', sandy: 'cleaning', andy: 'cleaning',
//   katie: 'cleaning', laura: 'pissing about', saajid: 'regulation',
//   alex: 'regulation', john: 'accounts', mr: 'canteen' }));
//=================================================================================================

//------------------------------- 5 --------------------------// The Office III - Broken Photocopier
// const obj = {
//         1: 0,
//         0: 1
// }
// function broken(x) {
//     return x.split('').map(bit => obj[bit]).join('');
// }
// console.log(broken("100010"));

//------------------------------- 6 --------------------------//The Office IV - Find a Meeting Room
//  дан массив.Каждое значение представляет конференц - зал.Твоя работа ? Найдите первую пустую комнату и
//  верните ее индекс(NB: в некоторых
//      тестовых случаях может быть более одной пустой комнаты).
// const condition = {
//     'x': 'busty',
//     'O': 'empty'
// }
// function meeting(x){
//     const emptyRoomIndex = x.indexOf('O');
//     return emptyRoomIndex === -1 ? "None available!" : emptyRoomIndex;
// }
// console.log(meeting(['X', 'O', 'X']));
//================================================================================================================

//------------------------------- 6.1 --------------------------//The Office V - Find a Chair

// В вашей комнате для совещаний можно разместить до 8стульев. needскажет вам, сколько было взято. Нужно найти столько.
// Найдите запасные стулья во множестве конференц - залов.Каждый кортеж конференц - зала будет иметь количество
// посетителей в виде строки.Каждый обитатель представлен 'X'.Кортеж комнаты также будет иметь целое число, указывающее,
//     сколько стульев в комнате.Вы должны вернуть массив целых чисел, который показывает, сколько стульев вы берете из
// каждой комнаты по порядку, пока у вас не будет требуемого количества.

// function meeting(x, need) {
//     if (need === 0) {
//         return 'Game On';
//     }
//     const freeСhairs = x.map(([str, people]) => Math.max(0, people - str.length));
//     const chairs = [];
//     let current = 0;
//     for (let i = 0; i < freeСhairs.length; i += 1) {
//         const toAdd = Math.min(need - current, freeСhairs[i])
//         chairs.push(toAdd);
//         current += Math.min(toAdd, freeСhairs[i])
//         if (current === need) {
//             break;
//         }
//     }
//     if (current < need) {
//         return "Not enough!"
//     }
//     return chairs;
//  }
//                         0            1            1            4
//  console.log(meeting([['XXX', 3], ['XXXXX', 6], ['XXXXXX', 7], ['XXXXX', 9]], 4));
//==============================================================================================

//------------------------------- 7 --------------------------// Who's Online?
// Получив ввод массива объектов, содержащих имена пользователей, статус и время с момента последнего
// действия(в минутах), создайте функцию для определения, кто есть online, offline и away.
// Если кто - то есть, onlineно они lastActivity были более 10 минут назад, их следует учитывать away.

//  const getUserStatus = (friend) => {
//     const { status, lastActivity, username } = friend;
//     if (status === 'online' && lastActivity <= 10) {
//         return 'online';
//     }
//     if (status === 'online' && lastActivity > 10) {
//         return 'away';
//     }
//     return 'offline';
// }
// const whosOnline = (friends) => {
//     let friendsStatus = {};
//     for (let i = 0; i < friends.length; i += 1) {
//         const status = getUserStatus(friends[i]);
//         const username = friends[i].username
//         if (!friendsStatus.hasOwnProperty(status)) {
//             friendsStatus[status] = [];
//         }
//         friendsStatus[status].push(username);
//     }
//     return friendsStatus;
// }
// console.log(whosOnline([
// {
//     username: 'David',
//     status: 'online',
//     lastActivity: 11
// },
// {
//     username: 'Lucy',
//     status: 'offline',
//     lastActivity: 22
//   },
//  {
//     username: 'Bob',
//     status: 'online',
//     lastActivity: 10
// },
//  {
//     username: 'Boba',
//     status: 'online',
//     lastActivity: 10
// },
//  {
//     username: 'coba',
//     status: 'online',
//     lastActivity: 5
// }
// ]
// ));
//==================================================================================================

//------------------------------- 8 --------------------------// Where my anagrams at? (retired)
// Два слова являются анаграммами друг друга, если они оба содержат одни и те же буквы
// Напишите функцию, которая найдет все анаграммы слова из списка.
// function isAnagrams(word, word2) {
//     const obj = {};
//     for (let letter of word) {
//         if (!obj.hasOwnProperty(letter)) {
//             obj[letter] = 0;
//         }
//         obj[letter] += 1;
//     }
//     for (let letter of word2) {
//         if (!obj.hasOwnProperty(letter)) {
//             obj[letter] = 0;
//         }
//         obj[letter] -= 1;
//     }
//     return Object.values(obj).every(el => el === 0) ;
// }

// function anagrams(word, words) {
//     return words.filter(el => isAnagrams(word, el));
// }
//  console.log(anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']));

//------------------------------- 9 --------------------------//Make a function that does arithmetic!
// Имея два числа и арифметический оператор(его имя в виде строки), верните результат двух чисел,
//     к которым был применен этот оператор.

// const operators = {
//     "add": (a, b) => a + b,
//     "subtract": (a, b) => a - b,
//     "multiply": (a, b) => a * b,
//     "divide": (a, b) => a / b
// };
// function arithmetic(a, b, operator) {
//     return operators[operator](a, b);
// }
// console.log(arithmetic(8, 2, 'divide')); //3

//------------------------------- 10 --------------------------// Pluck
//возвращает последовательность, содержащую именованное свойство каждого объекта
// function pluck(objs, name) {
//     return objs.map(obj => obj[name])
// }
// console.log(pluck([{ a: 1 }, { a: 2 }, { b: 2 }], 'a'));

//------------------------------- 11 --------------------------//Remove duplicate words
// удалить из строки все повторяющиеся слова, оставив только одиночные (первые) слова.

// function removeDuplicateWords(s) {
//     const words = {};
//     const arr = s.split(' ');
//     for (let word of arr) {
//         if (!words.hasOwnProperty(word)) {
//             words[word] = 0;
//         }
//     }
//     return Object.keys(words).join(' ');

// const words = [];
// const arr = s.split(' ');
// for (let word of arr) {
//     if (!words.includes(word)) {
//         words.push(word);
//     }
// }
// return words.join(' ')
// }
// console.log(removeDuplicateWords('alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'));

//------------------------------- 12 --------------------------//Find the unique number
// function findUnique(numbers) {
//     const num = {};
//     numbers.forEach(element => {
//         if (!num.hasOwnProperty(element)) {
//             num[element] = 0;
//         }
//         num[element] += 1;
//     });
//     return +Object.keys(num).find(key => num[key] === 1);
// }
//  console.log(findUnique([1, 8, 4, 4, 6, 1, 8]));

// //------------------------------- 13 --------------------------//Coding Meetup #2 - Higher-Order Functions Series - Greet developers

// function greetDevelopers(list) {
//     return list.map(developer => ({
//         ...developer,
//         greeting: `Hi ${developer.firstName}, what do you like the most about ${developer.language}?`,
//     }));
// }
// function greetDevelopers(list) {
//     return list.map(developer => {
//         return {
//             ...developer,
//             greeting: `Hi ${developer.firstName}, what do you like the most about ${developer.language}?`,
//         };
//     });
// }

// const list2 = [
//       {
//         firstName: 'Sofia', lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java',
//       },
//       {
//         firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: 'Python',
//       },
//       {
//         firstName: 'Madison', lastName: 'U.', country: 'United States', continent: 'Americas', age: 32, language: 'Ruby',
//       },
// ];
// const rawtrseyrtduytifucfj = [
//     {
//         firstName: 'Aaaaaa', lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java',
//     },
// ]
// console.log(greetDevelopers(rawtrseyrtduytifucfj));
// console.log(greetDevelopers(list2));
// console.log('2',list2);
//============================================================================================================================//

//------------------------------- 14 --------------------------//Convert Hash To An Array
//Преобразование хеша в массив.Ни больше ни меньше.

// function convertHashToArray(hash) {
//     const sortKeys = Object.keys(hash)
//         .sort();
//    return sortKeys.map(el => [el, hash[el]]);
// };
//  console.log(convertHashToArray({name: "Jeremy", age: 24}));
//==========================================================================================================================//

//------------------------------- 14 --------------------------// Kebabize
//Измените kebabizeфункцию, чтобы она преобразовывала строку регистра верблюда в регистр кебаба.
//  function kebabize(str) {
//      return str
//         .replace(/[0-9]/g, '')
//         .replace(/[A-Z]/g, c=>'-'+c.toLowerCase())
//         .replace(/^-/, '');
// }
// console.log(kebabize('CamelCased3Str-ing'));
//============================================================================================//

// ------------------------------- 15 --------------------------//Word a10n (abbreviation)
//любые и все «слова» (см. ниже) в этой строке длиной 4 или больше в аббревиатуру

//  function abbreviate(string) {
//     return string.replace(/[a-z]{4,}/gi, word => word[0] + (word.length - 2) + word.at(-1));                            //i  игнорирует кейс; +    метод at
// }
//  console.log(abbreviate("You need, need-not want, to complete this code-wars mission"));

// ------------------------------- 16 --------------------------//IP Validation
// Напишите алгоритм, который будет определять действительные адреса IPv4 в
// десятичном формате с точками.IP - адреса следует считать действительными,
// если они состоят из четырех октетов со значениями от 0 до 255 включительно.

// function validNumber(str) {
//   const containsDigitsOnly = /^[0-9]+$/.test(str);
//   if (!containsDigitsOnly) {
//     return false
//   }
//   if (str[0] === '0' && str !== '0') {
//       return false
//   }
//   const num = Number(str);
//   if (num < 0 && num > 255) {
//       return false
//   }
//   return true;
// }

// function isValidIP(str) {
//     const arr = str.split('.');
//     return arr.length === 4 && arr.every(validNumber);
//
//  console.log(isValidIP('35.173.198.'));
//=================================================================================================//

// ------------------------------- 18 --------------------------// String incrementer;
//написать функцию, которая увеличивает строку, чтобы создать новую строку.
// Если строка уже заканчивается числом, число должно быть увеличено на 1.
// Если строка не заканчивается цифрой. число 1 должно быть добавлено к новой строке.

///^[0-9]+$/.test(str)   спросить  isNaN(+letter)  и тернарник  + break и continue

// function incrementString(string) {
//     if (!/[0-9]+$/.test(string)) {
//         return string + '1';
//     }
//     const strReverse = string.split('').reverse();
//     let lengthNumber = 0;
//     for (const letter of strReverse) {
//         if (/^[0-9]+$/.test(letter)) {
//             lengthNumber += 1;
//         } else {
//             break;
//         }
//     }
//     return string.slice(0, -lengthNumber) + (String(+string.slice(-lengthNumber) + 1)).padStart(lengthNumber, '0');
// }
// console.log(incrementString("fo99obar179"));
//==================================================================================================

// ------------------------------- 19 --------------------------// From..To..Series #2: from arr1 to arr2.
// Find the most same sum value of pairs
// Подсчитайте сумму соответствующего номера позиции, найдите наибольшее количество пар с одинаковым
// значением суммы.вернуть результат двумерным массивом, содержащим все пары.

// function findPair(arr1, arr2) {
//   const pairs = [];
//   for (let i = 0; i < arr1.length; i += 1) {
//     pairs.push(arr1[i] + arr2[i]);
//   }
//   const pairsValue = {};
//   for (const pair of pairs) {
//     !pairsValue.hasOwnProperty(pair) ?  pairsValue[pair] = 1 : pairsValue[pair] += 1
//   }
//   const frequencies = Object.values(pairsValue);
//   const maxFrequency = Math.max(...frequencies);
//   const keys = Object.keys(pairsValue);
//   const pairedKeys = keys.filter(key => pairsValue[key] === maxFrequency);
//   const sum = Math.max(...pairedKeys);
//   const arr = [];
//   for (let i = 0; i < arr1.length; i += 1) {
//     if (arr1[i] + arr2[i] === sum) {
//        arr.push([arr1[i], arr2[i]])
//      }
//   }
//   return arr;
// }
// console.log(findPair([1, 2, 9, 4, 5], [9, 8, 0, 4, 3]));
//=================================================================================================================//

// ------------------------------- 20 --------------------------//Evaluating prefix Polish notation
// написать функцию calculate, которая принимает строку с математическим выражением, записанным в
// префиксной польской нотации, и вычисляет ее
// function isNumber(str) {
//   return str !== '+' && str !== '-' && str !== '/' && str !== '*';
// }
// const operators = {
//   '+': (a,b) => a + b,
//   '-': (a, b) => a - b,
//   '*': (a, b) => a * b,
//   '/': (a,b) => a / b,
//}
// function arithmetic(arr ) {
//   return operators[arr[0]](+arr[1], +arr[2]);
// }

// function calculate(expression) {
//   const arr = expression.split(' ');
//   for (let i = arr.length - 3; i >= 0; i--) {
//     if (!isNumber(arr[i]) && isNumber(arr[i + 1]) && isNumber(arr[i + 2]) ) {
//       arr.splice(i, 0, arithmetic(arr.splice(i, 3)));
//     }
//   }
//   return +arr;
// }
// console.log(calculate('+ 100 / + 5 3 - + 1 9 6'));

// ['+', '100', '/', '+', '5', '3', '-', '+', '1', '9', '6']

// function calculate(expression) {
//   const arr = expression.split(' ');

//   while(arr.length !== 0) {
//     const index = arr.findLastIndex((_, i) => !isNumber(arr[i]) && isNumber(arr[i + 1]) && isNumber(arr[i + 2]));
//     const [operator, left, right] = arr.splice(index, 3);
//     const result = operators[operator](left, right);
//     arr.splice(index, 0, result);
//   }

//     // for (let i = arr.length - 3; i >= 0; i--) {
//     //   if () {
//         // const spliceArr = arr.splice(i, 3);
//         // const resSpliceArrEl = arithmetic(spliceArr);
//         // console.log('op', arr.spilce(i, 0, 10));
//     //     console.log('spliceArr', spliceArr);

//     //   }
//     // }

//   return +arr[0];

// }
// console.log(calculate('+ 100 / + 5 3 - + 1 9 6')); // 102

// ------------------------------- 20 --------------------------//Convert A Hex String To RGB
// извлечь для цвета отдельные значения компонентов красного, зеленого и синего(RGB).

// function hexStringToRGB(hexString) {
// return {
//     r: parseInt(hexString.slice(1, 3), 16),
//     g: parseInt(hexString.slice(3, 5), 16),
//     b: parseInt(hexString.slice(5), 16)
//   };
// }
// console.log(hexStringToRGB("#FF9933"));
//======================================================================================================
// ------------------------------- 21 --------------------------//Run-length encoding
// написать такую ​​кодировку длин серий.Для заданной строки верните список(или массив)
// пар(или массивов)[(i 1, s 1 ), (i 2, s 2 ), …, (in , s n ) ]

// const runLengthEncoding = function (str) {
//   const array = [];
//   let counter = 1;
//   for (let i = 0; i < str.length; i += 1){
//     if (str[i] === str[i + 1] ) {
//       counter += 1;
//     } else {
//       array.push([counter, str[i]]);
//       counter = 1;
//     }
//   }
//   return array;
// }
// console.log(runLengthEncoding('WWWWBWWWBBBWWWWBWWWW'));
//======================================================================================================

// ------------------------------- 21 --------------------------// Is a number prime
// Определите функцию, которая принимает целочисленный аргумент и возвращает логическое значение true или
// false в зависимости от того, является ли целое число простым.
// function isPrime(num) {
//   if (num < 2 ) {
//     return false;
//   }
//   let number = 2;
//   while ( number * number <= num) {
//     if (num % number === 0 ) {
//       return false;
//   }
//     number += 1;
//   }
//   return true;
// }
//   console.log(isPrime(4));
//==========================================================================================================

// ------------------------------- 22 --------------------------//Sum of Digits / Digital Root
// Учитывая n, возьмите сумму цифр n.Если это значение имеет более одной цифры, продолжайте
// уменьшать таким образом, пока не будет получено однозначное число.Ввод будет неотрицательным целым числом.

// function sumDigit(num) {
//   const number = num.toString();
//   let sum = 0;
// for (const digit of number) {
//       sum += +digit
//   }
//   return sum;
// }

// function digitalRoot(n) {
//   while (n > 9) {
//     n = sumDigit(n)
//      return n;
// }
// console.log(digitalRoot(10));
//==========================================================================================================

// ------------------------------- 23 --------------------------//Alphabetized//
// Измените порядок символов строки, чтобы они были объединены в новую строку в порядке «без учета регистра в
// алфавитном порядке». Пробелы и знаки препинания просто удаляются!

// function isAlphabetNumber(letter) {

//   const abc = 'abcdefghijklmnopqrstuvwxyz';
//   const ABC = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
//   if (letter >= 'A' && letter <= 'Z') {
//     return ABC.indexOf(letter);
//   }
//   return abc.indexOf(letter);
// }
//console.log(isAlphabetNumber('h'));

// function alphabetized(str) {
//   const string = str
//     .replace(/[^a-z]/gi, '')
//     .split('')
//     .map((el, i) =>[ el, i])
//     .sort((a, b) => {
//       if (a[0].toLowerCase() < b[0].toLowerCase()) {
//         return -1
//       }
//       if (a[0].toLowerCase() > b[0].toLowerCase()) {
//         return 1
//       }
//       if (a[1] < b[1]) {
//       return -1
//       }
//       if (a[1] > b[1]) {
//       return 1
//       }
//     }
//     )
//     .map(arr => arr[0])
//     .join('');
//      return string;
// }
// console.log(alphabetized("The Holy Bible"));
//======================================================================================================

// ------------------------------- 24 --------------------------//Sort Strings by Most Contiguous Vowels
// написать функцию, которая будет получать массив строк в качестве единственного
// аргумента, затем каждая строка обрабатывается и сортируется(в порядке убывания) на основе длины
// единственной самой длинной подстроки смежных гласных(aeiouAEIOU), который может содержаться в
// строке.Строки могут содержать буквы, цифры, специальные символы, прописные и строчные буквы, пробелы,
//  а также могут быть(часто будут) несколько подстрок смежных гласных.Нас интересует только одна самая
//    длинная подстрока гласных внутри каждой строки во входном массиве.

// function maxAdjacentVowelsCount(string) {
//     const letters = string.replace(/[^aeiou' ']/gi, ' ')
//     const num = letters.split(' ').map(letters => letters.length)
//     return Math.max(...num);
// }

// function sortStringsByVowels () {
// //   const vowelsMax = strings.map(str => maxAdjacentVowelsCount(str));

//   return strings
//     .sort((a, b) => {
//         const aCount = maxAdjacentVowelsCount(a)
//         const bCount = maxAdjacentVowelsCount(b)
//         if (aCount < bCount) {
//             return 1;
//         }
//         if (aCount > bCount) {
//             return -1;
//         }
//         return 0;
//     })
// }
// console.log(sortStringsByVowels (["how about now", "a beautiful trio of", "a bautiful trio of"]));
//=====================================================================================================

// ------------------------------- 25 --------------------------//My Language Skills
// Вам предоставляется словарь / хэш / объект, содержащий несколько языков и результаты вашего теста на данных
// языках.Верните список языков, на которых ваш тестовый балл не ниже 60, в порядке убывания баллов.
// Примечание: баллы всегда будут уникальными (поэтому не будет повторяющихся значений).

// function myLanguages(results) {
//   return Object.keys(results)
//     .filter(key => results[key] >= 60)
//     .sort((a, b) => results[b] - results[a]);
// }
// console.log(myLanguages({ "Python" : 65, "Java" : 10, "Ruby" : 80}));

//   // const filteredValues = Object.values(results)
//   //   .filter(value => value >= 60)
//   //   .sort((a, b) => b - a);
//   // const keys = Object.keys(results);
//   // const skils = [];
//   // for (let i = 0; i < filteredValues.length; i += 1) {
//   //   for (let j = 0; j < keys.length; j += 1) {
//   //     if (filteredValues[i] === results[keys[j]]) {
//   //       skils.push(keys[j]);
//   //     }
//   //   }
//   // }
//   // return skils;
// }
//console.log(myLanguages({ "Python" : 65, "Java" : 10, "Ruby" : 80}));
//=================================================================================

//------------------------------- 26 --------------------------//Sports League Table Ranking
// победа дает команде 2 points, ничья дает обеим командам 1 point.После некоторых игр вам нужно
// вычислить порядок команд .Вы используете следующие
//  критерии для организации команд:
// очки
// Дифференциал забитых мячей (разница между забитыми и пропущенными голами)
// Забитые голы
// Сначала вы сортируете команды по их очкам.Если две или более команд набрали одинаковое количество очков, вступает
// в действие второй критерий и так далее.Наконец, если все критерии одинаковы, команды делят места.
// Вход
// number: количество команд в вашей лиге.
//   games: Массив массивов.Каждый элемент представляет собой сыгранную игру с массивом из четырех элементов
//   [TeamA, TeamB, GoalA, GoalB](TeamAсыгранных TeamBи забитых GoalAголов и пропущенных GoalBголов).
// Вывод
// positions: Массив позиций. -th iэлемент должен быть позицией i-th команды в вашей лиге.

// function computeRanks(number, games) {
//   const teamsPoints = [];
//   for (let i = 0; i < number; i += 1) {
//     teamsPoints.push({ comand: i, points: 0, diffScoring: 0, goalsScored: 0 });
//   }
//   console.log(teamsPoints)
//   for (const game of games) {
//     const [team1, team2, goals1, goals2] = game;
//     if (goals1 < goals2) {
//       teamsPoints[team2].points += 2;
//     } else if (goals1 > goals2) {
//       teamsPoints[team1].points += 2;
//     } else if (goals1 === goals2) {
//       teamsPoints[team2].points += 1;
//       teamsPoints[team1].points += 1;
//     }
//     teamsPoints[team1].diffScoring += goals1 - goals2;
//     teamsPoints[team2].diffScoring += goals2 - goals1;
//     teamsPoints[team1].goalsScored += goals1;
//     teamsPoints[team2].goalsScored += goals2;
//   }

//   const comparator = (a, b) => {
//     if (a.points < b.points) {
//       return 1;
//     }
//     if (a.points > b.points) {
//       return -1;
//     }
//     if (a.diffScoring < b.diffScoring) {
//       return 1;
//     }
//     if (a.diffScoring > b.diffScoring) {
//       return -1;
//     }
//     if (a.goalsScored < b.goalsScored) {
//       return 1;
//     }
//     if (a.goalsScored > b.goalsScored) {
//       return -1;
//     }
//     return 0;
//   };

//   teamsPoints.sort(comparator);
//   for (let i = 0; i < teamsPoints.length; i += 1) {
//     teamsPoints[i].rank = i + 1;
//     if (i !== 0 && comparator(teamsPoints[i], teamsPoints[i - 1]) === 0) {
//       teamsPoints[i].rank = teamsPoints[i - 1].rank
//     }
//   }
//   const ranks = [];
//   for (const teamsPoint of teamsPoints) {
//      ranks[teamsPoint.comand] = teamsPoint.rank;
//   }
//   return ranks;
//   }
//const gamesPlayed = [[0, 5, 2, 2],
// [1, 4, 0, 2],
// [2, 3, 1, 2],
// [1, 5, 2, 2],
// [2, 0, 1, 1],
// [2, 5, 0, 2],
// [3, 1, 1, 1],
// [4, 0, 2, 0]];
// console.log(computeRanks(6, gamesPlayed));

// console.log(computeRanks(6, []));
//===================================================================================================================

// ------------------------------- 26 --------------------------//Double Sort
//  вернуть один массив, в котором сначала числа отсортированы в порядке возрастания, а затем строки, отсортированные
//   в алфавитном порядке.Значения должны сохранять свой исходный тип.Обратите внимание, что числа, записанные в виде
// строк, являются строками и должны быть отсортированы вместе с другими строками.

// function dbSort(a) {
//   const number = a.filter(el => typeof el === 'number').sort((a, b) => a - b);
//   const str = a.filter(el => typeof el === 'string').sort();
//   return [...number, ...str];
// }
// console.log(dbSort(["Banana", "Orange", "Apple", "Mango", 0, 2, 2]));
//=======================================================================================================

// ------------------------------- 27 --------------------------//Sorting by bits
// отсортировать массив 32 - битных целых чисел в порядке возрастания количества битов,
// которые они имеют
// function getBit(number) {
//     return number.toString(2).replace(/0/gi, '').length;
// }
// //console.log(getBit(9));

// function sortByBit(arr) {
//     return arr.sort((a, b) => {
//         if(getBit(a) > getBit(b))  {
//             return 1;
//         }
//         if (getBit(a) < getBit(b)) {
//             return -1;
//         }
//         if(a > b)  {
//             return 1;
//         }
//         if (a < b) {
//             return -1;
//         }
//         return 0;
//        })
// console.log(sortByBit( [9,4,5,3,5,7,2,8,2,6,8,0]));             //[0, 2, 2, 4, 8, 8, 3, 5, 5, 6, 9, 7]
//=============================================================================================

// ------------------------------- 28 --------------------------// Persistent Bugger.
// Напишите функцию, persistence которая принимает положительный параметр num и возвращает
//  его мультипликативную постоянство, то есть количество раз, которое вы должны умножить
//   на цифры num, пока не получите одну цифру.

// function persistence(num) {
//   let counter = 0;
//   let current = num;
//   while(current > 9) {
//     current = current.toString().split('').reduce((akk, el) => akk * +el, 1);
//     counter += 1;
//   }
//   return counter;
// }
//  console.log(persistence(39));
//========================================================================================================

// ------------------------------- 29 --------------------------//Group Anagrams проходит только    test
//сгруппировать слова в анаграммы.

// function groupAnagrams(words) {
//     const obj = {};
//     for (const word of words) {
//         const key = word.split("").sort().join("");
//         if (!obj.hasOwnProperty(key)) {
//             obj[key] = [];
//         }
//         obj[key].push(word);
//     }
//     return Object.values(obj);
// }
// console.log(groupAnagrams(["tsar", "rat", "tar", "star", "tars", "cheese"]));
//========================================================================================================
