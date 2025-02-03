// // Задача 10: Найти первое четное число в массиве
// // Тесты
// console.log(findFirstEven([1, 3, 5, 4])); // 4
// console.log(findFirstEven([1, 3, 5])); // null
// console.log(findFirstEven([])); // null


const arr = [1, 3, 5, 4];
let n = null;

function chet (arr){
    if(arr.length == 0) return n;
    if(arr[0]% 2 == 0) n = arr[0];
    chet(arr.slice(1));
}
chet(arr);
console.log(n);
