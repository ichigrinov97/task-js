// // Задача 7: Преобразовать массив в строку (через запятую)
// // Тесты
// console.log(arrayToString([1, 2, 3])); // "1,2,3"
// console.log(arrayToString([])); // ""
// console.log(arrayToString([42])); // "42"

const arr = [1, 2, 3];
let str = '';

function arrTostr(arr, str) {
    if (arr.length === 0) return str;
    arr.length == 1 ? str += arr[0] : str += arr[0] + ',';
    return arrTostr(arr.slice(1), str);
}
const result = arrTostr(arr, str);
console.log(result);
