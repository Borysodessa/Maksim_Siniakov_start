function getShotesWord(str) {
    const strSplit = str.split(' ');
    let shotesWord = 0;
    for (let i = 0; i = strSplit.length; i += 1) {

         if (shotesWord < strSplit[i]) {
             shotesWord = strSplit[i]
         }
    }
    return shotesWord;
}
console.log(getShotesWord("bitcoin take over the world maybe who knows perhaps"));