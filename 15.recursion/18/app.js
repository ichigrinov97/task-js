// // Задача 6: Проверить, является ли массив отсортированным
// // Тесты
// console.log(isSorted([1, 2, 3, 4])); // true
// console.log(isSorted([1, 3, 2])); // false
// console.log(isSorted([5])); // true

const arr = [1, 2, 3, 4];

function sortedOfArr(arr){
    if(arr.length === 0){
        return true;
    }
    if(arr[0] > arr[1]){
        return false;
    }

    return sortedOfArr(arr.slice(1))
}
const res = sortedOfArr(arr);
console.log(res);
