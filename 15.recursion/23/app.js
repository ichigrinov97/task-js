// // Задача 11: Подсчитать количество слов в строке
// // Тесты
// console.log(countWords("hello world")); // 2
// console.log(countWords("")); // 0
// console.log(countWords("a b c")); // 3

const strDefault = " ".split(' ');
let n = 0;


function howMuchWords(strDefault){
    if(strDefault.length === 0) return;
    if(strDefault[0].length > 0) n+= 1;
    howMuchWords(strDefault.slice(1));
}
howMuchWords(strDefault);
console.log(n);
