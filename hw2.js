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
//         // if (friendsStatus[status] === undefined) {
//         // if (!(status in friendsStatus)) {
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
//     // 1. прибавлять буквы первого слова
//     // 2. вычитать буквы второго слова
//     // 3. проверить, что все буквы имеют значение 0
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


//------------------------------- 11 --------------------------//Remove duplicate words ???????????Использовать вместо  for of - for each ?
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
//     // https://learn.javascript.ru/array-methods#sort-fn
//     // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
// };
//  console.log(convertHashToArray({name: "Jeremy", age: 24}));
    
//------------------------------- 14 --------------------------// Kebabize
//Измените kebabizeфункцию, чтобы она преобразовывала строку регистра верблюда в регистр кебаба.
//  function kebabize(str) {
//      return str.replace(/[A-Z,0-9]/g, c=>'-'+c.toLowerCase()).replace(/[0-9]/g, '').replace(/^-/, '');
// }
// console.log(kebabize('CamelCased3Str-ing'));



// ------------------------------- 15 --------------------------//Word a10n (abbreviation)
//любые и все «слова» (см. ниже) в этой строке длиной 4 или больше в аббревиатуру
//  function abbreviate(string) {
//     const arr = [];
//     const array = string.replace(/[,]/g, ' ,').replace(/[-]/g, ' - ').split(' ');
//     array.forEach(element => {
//         element.length <= 3 ? arr.push(element) : arr.push(`${element.slice(0, 1) + (element.length - 2) + element.slice(-1)}`);
//     });
//     return arr.join(' ').replace(/ ,/g, ',').replace(/ - /g, '-');
//  }
//  console.log(abbreviate("You need, need-not want, to complete this code-wars mission"));


// ------------------------------- 16 --------------------------//IP Validation 
// Напишите алгоритм, который будет определять действительные адреса IPv4 в
// десятичном формате с точками.IP - адреса следует считать действительными,
// если они состоят из четырех октетов со значениями от 0 до 255 включительно.
// function isValidIP(str) {
//     const arr = str.split('.');
//     if ((arr
//         .some((el) => (+el.length > 1 && +el[0] === 0) || arr.length !== 4 || str === '' || el === '' ||
//             +el < 0 || +el > 255)) || (str.replace(/[^0-9]/g, '.') !== str)) {
//        return false;
//     }
//     return true;
// }
// console.log(isValidIP('35.173.198.'));

// ------------------------------- 17 --------------------------//
//Super power frequency function
// function frequency(arr, options) {


//     const names = {};
//     for (const name of arr) {
//         if (!names.hasOwnProperty(name)) {
//             names[name] = 0;
//         }
//         if (names.hasOwnProperty(name)) {
//             names[name] += 1;
//         }
//     }
//    return Object.keys(names).map((el, i) => [arr[i], names[el]]);
     
// }

//                                                       // сортировки по алфавиту
// function alphabeticalCompare(value1, value2) {
//   if (String(value1) < String(value2)) {
//     return -1;
//   } else if (String(value1) > String(value2)) {
//     return 1;
//   } else {
//     return 0;
//   }
// }


// function frequencyCompare(value1, value2, freq1, freq2) {
//   return freq2 - freq1;
// }


// function isEven(number) {
//   return number % 2 === 0;
// }

// function parity(number) {
//   return isEven(number) ? 'even' : 'odd';
// }

// function profession(person) {
//   return person.profession;
// }

// var persons = [
//   {name: 'Peter', profession: 'teacher'},
//   {name: 'Michael', profession: 'teacher'},
//   {name: 'Anna', profession: 'scientific'},
//   {name: 'Rose', profession: 'scientific'},
//   {name: 'Anna', profession: 'scientific'},
//   {name: 'Anna', profession: 'politician'}
// ];
// console.log(frequency(['Peter', 'Anna', 'Rose', 'Peter', 'Peter', 'Anna'], {compareTo: alphabeticalCompare}));
//frequency(persons, {criteria: profession, compareTo: frequencyCompare}); //[["scientific", 3], ["teacher", 2], ["politician", 1]]
//console.log(frequency([1, 10, 12, 2, 1, 10, 2, 2], {compareTo: isEven}));

// ------------------------------- 18 --------------------------// String incrementer;
//написать функцию, которая увеличивает строку, чтобы создать новую строку.

// Если строка уже заканчивается числом, число должно быть увеличено на 1.
// Если строка не заканчивается цифрой. число 1 должно быть добавлено к новой строке.


// function incrementString(string) {
//     if (isNaN(+string[string.length - 1])) {
//         return string + '1';
//     }
//     const strReverse = string.split('').reverse();
//     let length = 0;
//     for (const letter of strReverse) {
//         if (!isNaN(+letter)) {
//             length += 1;
//         }
//         if (isNaN(+letter)) {
//             break;
//         }
//     }
//     return string.slice(0, - length) + (String(+string.slice(-length) + 1)).padStart(length, '0');
// }
// console.log(incrementString("fo99obar99"));


// ------------------------------- 19 --------------------------// From..To..Series #2: from arr1 to arr2. Find the most same sum value of pairs

// Подсчитайте сумму соответствующего номера позиции, найдите наибольшее количество пар с одинаковым 
// значением суммы.вернуть результат двумерным массивом, содержащим все пары.

    //     for (let j = 0; j < arr2.length; i += 1) { 

    //     }
    // }
    
    // const obj = {};
    // for (let i = 0; i < arr1.length; i += 1) {
    //     obj[i] = arr1[i] + arr2[i];
    // }
    // const values = Object.values(obj); console.log('val', values);
    // const object = {};
 

    // for (let i = 0; i < values.length; i += 1) {
    //     for (let j = 1; j < values.length; j += 1) {
    //         if (values[i] === values[j]) {
    //             object[arr1[i]] = arr2[i];
    //         }
    //     }
//      } 
//     // console.log('ob', object);
    
    
// }
// console.log(findPair([5, 2, 3, 4, 0,], [0, 8, 0, 0, 9]));


// ------------------------------- 20 --------------------------//Evaluating prefix Polish notation
// function calculate(expression) {
//   const arr = expression.split(' ').reverse(); console.log(arr);
//   for (let i = 0; i < arr.length; i += 1){
//     if ((i + 1) % 3 === 0) {
//       const arrSlice = (+arr.slice((i - 2), (i - 1))) + arr.slice((i), (i + 1)) + (+arr.slice((i - 1), (i))).replace('+', +);
//         console.log(arrSlice);
//      }
//   }
// }
// console.log(calculate('+ 5 -3'))