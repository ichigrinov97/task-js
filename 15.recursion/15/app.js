// // Задача 3: Найти максимальное число в массиве
// // Тесты
// console.log(findMax([1, 5, 3, 9, 2])); // 9
// console.log(findMax([-10, -5, -3])); // -3
// console.log(findMax([42])); // 42


const arr = [1, 5, 3, 9, 2];
let max = -Infinity;
function maxVal (arr){
    if(arr.length === 0){
        return max;
    }
    if(arr[0]> max){
        max = arr[0]
    }

    return maxVal(arr.slice(1));
}
const result = maxVal(arr);
console.log(result);
