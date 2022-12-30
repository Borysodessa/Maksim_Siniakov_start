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
    // return pointsBoredom <= 80 ? 'kill me now' : 100 > pointsBoredom && pointsBoredom > 80 ? 'i can handle this' : 'party time!!';
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
// //                         0            1            1            4
//  console.log(meeting([['XXX', 3], ['XXXXX', 6], ['XXXXXX', 7], ['XXXXX', 9]], 4));
//==============================================================================================

const whosOnline = (friends) => {
// Your code here...
}




