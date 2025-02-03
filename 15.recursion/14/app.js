// // Задача 2: Найти сумму чисел в массиве
// // Тесты
// console.log(sumArray([1, 2, 3, 4])); // 10
// console.log(sumArray([10, -2, 5])); // 13
// console.log(sumArray([])); // 0

const arr = [1, 2, 3, 4];


function doSum (arr){
    if(arr.length === 0) return 0;
     return  arr[0] + doSum(arr.slice(1));
}
const res = doSum(arr);
console.log(res);
