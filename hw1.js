//------------------task1---------------------//
//Вы получаете массив чисел, возвращаете сумму всех положительных.

function PositivSum(arr) {
    const positivNumbers =  arr.filter(arrEl => arrEl > 0);
    return positivNumbers.reduce((positivNumberSum, positivNumber) => positivNumberSum + positivNumber)
}
    console.log(PositivSum([1, -4, 7, 12, 50]));


                     //--------------------task2-------------------//
    //Просто, учитывая строку слов, вернуть длину кратчайшего слова (слов).
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
//     const stringDidgit = String(num);
//     const arrDidgits = stringDidgit.split('');
//     const arrSquareDigit = arrDidgits.map(arrDidgit => Math.pow(arrDidgit, 2));
//     const squareDigitsNum = arrSquareDigit.join('')
//     return squareDigitsNum;
// }
//     console.log(">>>>", squareDigits(234));

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
    //    let str = '';
//      for (let i = 0; i < integer; i += 1){
//          for (let j = 0; j < integer; j += 1){
//              str += '+';  
//          } str += '\n';
//     }
//     return str.slice(0, -1);
// }
//    console.log(generateShape(5));

//--------------------task7-------------------//
// вернуть количество гласных в заданной строке.

// function getCount(str) {
//     const vowels = ['a', 'e', 'i', 'o', 'u'];
//     const arrWords = str.split(''); 
//     return vowels.flatMap(vowel => vowel = arrWords.filter(arrWord =>
//         arrWord === vowel)).length;
// }
//     console.log(getCount('aavafrcascwswfzcw'));


                //--------------------task8-------------------//
                // Даны положительное целое число n, записанное в виде 
// abcd... (a, b, c, d... являются цифрами), и положительное целое число p
// мы хотим найти положительное целое число k, если оно существует, такое,
//     что сумма цифр n, взятых в последовательных степенях p, равна k * n.  

// function digPow(n, p) {
//     const string = String(n);
//     const arrStrings = string.split(''); 
//     const arrPowNumbers = arrStrings.map(arrString =>
//         Math.pow(Number(arrString), (p += 1) - 1)
//     ); 
//     const arrPowNumberSum = arrPowNumbers.reduce((sumNumbers, arrPowNumber) =>
//         sumNumbers + arrPowNumber);
    
//     if (!Number.isInteger (arrPowNumberSum / n)) { 
//         return -1
//     }
//     return arrPowNumberSum / n;
// }

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
//      return arr.findIndex(arrEl => arrEl === minNumber);
//  } 
//      console.log(min([1, 2, 3, 4, 5], 'value'))
     
                 //--------------------task10-------------------//
                            
// function arrayDiff(a, b) {
//     return a.filter(element => !b.includes(element));
// }

