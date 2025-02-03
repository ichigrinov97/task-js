// // Задача 12: Вычислить сумму квадратов элементов массива.
// // Тесты:
// console.log(sumOfSquares([1, 2, 3])); // 14
// console.log(sumOfSquares([0, 4, -2])); // 20

const arr = [0, 4, -2];
let sum = 0;


function doSumSqrt(arr){
    if(arr.length === 0) return sum;
    return arr[0] ** 2 + doSumSqrt(arr.slice(1));
}
const result = doSumSqrt(arr);
console.log(result);
