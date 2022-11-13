//------------------task1---------------------//
//Вы получаете массив чисел, возвращаете сумму всех положительных.

// function PositivSum(arr) {
//     let sumOfPositives = 0;
//     for (const arrElement of arr) {
//         if (arrElement > 0) {
//             sumOfPositives += arrElement;
//         };
//     }
//     return sumOfPositives;
// }
// console.log(PositivSum([1, -4, 7, 12]));


                     //--------------------task2-------------------//
                        

//Просто, учитывая строку слов, вернуть длину кратчайшего слова (слов).

// function getShotesWord(str) {
//   const strSplit = str.split(' ');
//   let shotesWord = strSplit[0];
//      for (let i = 0; i < strSplit.length; i += 1) {
        
//      if (shotesWord.length > strSplit[i].length) {
//           shotesWord = strSplit[i]
//         }
//   }
//   return shotesWord.length;
// }
// console.log(getShotesWord("bitcoin take over the world maybe who knows perhaps"));


                       //--------------------task3-------------------//
// создайте функцию, которая берет список неотрицательных целых чисел и строк и возвращает
//  новый список с отфильтрованными числами.

// function filter_list(list) {
//   return list.filter(listItem => typeof(listItem) === 'number');   
// }


                        //--------------------task4-------------------//

                     //возвести в квадрат каждую цифру числа и соединить их  
                     
// function squareDigits(num) {
//     const arrSquareDigits = [];
//     const stringDidgit = String(num);
//     for (const letter of stringDidgit) {
//         arrSquareDigits.push(Math.pow(Number(letter), 2));
//     }
//     return Number(arrSquareDigits.join(''));
// }

                            //--------------------task5-------------------//
                            
//  Создайте программу, которая фильтрует список строк и возвращает список, содержащий только имена ваших друзей.
// Если в имени ровно 4 буквы, можете быть уверены, что оно должно быть вашим другом! В противном случае, вы можете быть уверены, что он не...
// Пример: Input = ["Ryan", "Kieran", "Jason", "Yous"], Output = ["Ryan", "Yous"]     

function friend(friends) {
    const filteredFriends = [];
    for (const friend of friends) {
        if (friend.length === 4) {
            filteredFriends.push(friend);
      }
    }
    return filteredFriends;
}
console.log(friend(["Ryan", "Kieran", "Jason", "Yous", "Olga", "Makar"]));


                         