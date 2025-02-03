// // Задача 4: Посчитать количество элементов в массиве
// // Тесты
// console.log(countElements([1, 2, 3])); // 3
// console.log(countElements([])); // 0
// console.log(countElements([42])); // 1

const arr = [1, 2, 3];

function lengthOfArr (arr){
    if(arr.length === 0){
        return 0;
    }

    return 1 + lengthOfArr(arr.slice(1))
}
const res = lengthOfArr(arr);
console.log(res);
