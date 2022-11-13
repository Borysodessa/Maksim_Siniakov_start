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


                       
// создайте функцию, которая берет список неотрицательных целых чисел и строк и возвращает
//  новый список с отфильтрованными числами.

function filter_list(list) {
  return list.filter(listItem => typeof(listItem) === 'number');   
}





                       