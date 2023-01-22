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

//------------------------------- 6 --------------------------//The Office V - Find a Chair

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

// ------------------------------- 17 --------------------------//Super power frequency function
//Функция берет массив и вычисляет частоту каждого значения массива, отсортированного естественным образом.

// function frequency(arr, options) {
//   const criteria = options.compareTo;
//   //let array = arr; console.log('arr->', array);
//   let array = [];                 //compareTo: number
//   for (const el of arr) { 
//     array.push(criteria(el));
//   }
//  //array = arr.sort(criteria(el));     // compareTo: alphabeticalCompare

//   const map = new Map();
//   for (let name of arr) {
//     if (!map.has(name)) { 
//       map.set(name, 1)
//     } else {
//       map.set(name, (map.get(name) + 1));
//     }
//    }
//    return Array.from(map);            
//}
//  console.log(1, frequency([6, 1111, 10, 12, 22, 1, 1022, 2, 2, 4, 4], {
//   compareTo: number => number.toString().length
//  }));
 //console.log(2, frequency(['Peter', 'Anna', 'Rose', 'Peter', 'Peter', 'Anna'], { compareTo: alphabeticalCompare }));
//function alphabeticalCompare(value1, value2) {
  // if (String(value1) < String(value2)) {
  //   return -1;
  // } else if (String(value1) > String(value2)) {
  //   return 1;
  // } else {
  //   return 0;
  // }
 //}
//console.log(3, frequency(['Peter', 'Anna', 'Rose', 'Peter', 'Peter', 'Anna'], { frequencyCompare }));
// function frequencyCompare(value1, value2, freq1, freq2) {
  //return freq2 - freq1;
//}
//console.log(frequency([1, 2, 3, 4, 5, 6, 7], {criteria: parity}));
// function isEven(number) {
//   return number % 2 === 0;
// }
// function parity(number) { 
//   return isEven(number) ? 'even' : 'odd';              //[["even", 3], ["odd", 4]]
// }







// ------------------------------- 18 --------------------------// String incrementer;
//написать функцию, которая увеличивает строку, чтобы создать новую строку.
// Если строка уже заканчивается числом, число должно быть увеличено на 1.
// Если строка не заканчивается цифрой. число 1 должно быть добавлено к новой строке.
///^[0-9]+$/.test(str)   спросить  isNaN(+letter)  и тернарник  + break и continue

// function incrementString(string) {
//     if (!/^[0-9]+$/.test(string.at(-1))) {
//         return string + '1';
//     }
//     const strReverse = string.split('').reverse();
//     let lengthNumber = 0;
//     for (const letter of strReverse) {
//         if (/^[0-9]+$/.test(letter)) {
//             lengthNumber += 1;
//         }
//         if (!/^[0-9]+$/.test(letter)) {
//             break;
//         }
//     }
//     return string.slice(0, - lengthNumber) + (String(+string.slice(-lengthNumber) + 1)).padStart(lengthNumber, '0');
// }
// console.log(incrementString("fo99obar179"));


// ------------------------------- 19 --------------------------// From..To..Series #2: from arr1 to arr2.??????????
// Find the most same sum value of pairs
// Подсчитайте сумму соответствующего номера позиции, найдите наибольшее количество пар с одинаковым
// значением суммы.вернуть результат двумерным массивом, содержащим все пары.
  // function frequency(arr) {
  //     const map = new Map();
  //     for (let name of arr) {
  //         if (!map.has(name)) {
  //             map.set(name, 1)
  //         } else {
  //             map.set(name, (map.get(name) + 1));
  //         }
  //     }
  //   return Array.from(map);
  // }

  // function findPair(arr1, arr2) {
  //   const pairs = []; 
  //   for (let i = 0; i < arr1.length; i += 1) {
  //     pairs.push(arr1[i] + arr2[i]);
  //   } 
  //   const frequencyPairs = frequency(pairs); console.log('frequency', frequencyPairs);
  //   const repeatedPairs = [];
  //   for (const arr of frequencyPairs) {
  //     if (arr[1] > 1) {
  //       repeatedPairs.push(arr);
  //     }
  //   }
    
    
    
    // const filteredPairs = pairs
    //   .filter((pair, i, arr) => arr.indexOf(pair) !== i); console.log(filteredPairs);
    // for (let i = 0; i < filteredPairs.length; i += 1) { 

    // }
    // const samePairs = []; 
    // const maxPairs =  Math.max(...filteredPairs);
    // for (i = 0; i < pairs.length; i += 1) {
    //   if (pairs[i] === maxPairs) {
    //     samePairs.push([arr1[i], arr2[i]]);
    //   }
    // }
    // return samePairs;
  // }
  // console.log(findPair([1, 2, 9, 4, 5, 1], [9, 8, 0, 4, 3, 7]));


// ------------------------------- 20 --------------------------//Evaluating prefix Polish notation????????????????
// написать функцию calculate, которая принимает строку с математическим выражением, записанным в
// префиксной польской нотации, и вычисляет ее
// function calculate(expression) {

//   const a = ('5', Number('+'), '6');
//   console.log(a);
// }
// console.log(calculate('+ 5 3'));


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

// ------------------------------- 21 --------------------------//Run-length encoding??????????????????
// написать такую ​​кодировку длин серий.Для заданной строки верните список(или массив)
// пар(или массивов)[(i 1, s 1 ), (i 2, s 2 ), …, (in , s n ) ]

// var runLengthEncoding = function (str) {
//  let arr = [];
//   const array = [];
//   for (let i = 0; i < str.length; i += 1){
//     //const array = ([1, str[i]]);
//     if (str[i] !== str[i + 1]) {
//       arr.push(array);
//     }
//     if (str[i + 1] === str[ i ]) {
//       array[0] += 1;
//     }
//     console.log(array);
//   } return arr;
// }
// console.log(runLengthEncoding('WWWWWWWWWWWWBWWWWWWWWWWWWBBBWWWWWWWWWWWWWWWWWWWWWWWWBWWWWWWWWWWWWWW'));


// ------------------------------- 21 --------------------------// Is a number prime?
// Определите функцию, которая принимает целочисленный аргумент и возвращает логическое значение true или
// false в зависимости от того, является ли целое число простым.
// function isPrime(num) {
//   if (num <= 0 || num === 1) {
//     return false;
//   }

//   let number = 2;

//   while ( number < num) { 
//     if (num % number === 0 ) {
//       return false;
//   }
//     number += 1;
//   }
//   return true;
// }
//  console.log(isPrime(17));
