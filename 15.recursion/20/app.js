// // Задача 8: Подсчитать количество гласных в строке
// // Тесты
// console.log(countVowels("hello")); // 2
// console.log(countVowels("xyz")); // 0
// console.log(countVowels("aeiou")); // 5

const str = "aeiou".split('');
const glas = "eyuioa".split('');
let n = 0;
function glasInstr(str, glas) {
    if (str.length === 0) return n;
    if (glas.includes(str[0])) n += 1;
    return glasInstr(str.slice(1), glas);
}
const res = glasInstr(str, glas);
console.log(res);
