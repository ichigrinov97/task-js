// // Задача 14: Преобразовать строку, заменяя пробелы на дефисы.
// // Тесты:
// console.log(replaceSpaces("hello world")); // "hello-world"
// console.log(replaceSpaces("a b c")); // "a-b-c"

const str = "a b c".split(' ');
let str1 = '';
function newStr (str,str1){
    if(str.length === 0) return str1;
    str.length == 1? str1 +=str[0] : str1 += str[0] + '-';
    return newStr(str.slice(1),str1);
}
const result = newStr(str,str1);
console.log(result);
