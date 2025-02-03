// Задача 13: Найти индекс первого отрицательного элемента в массиве. (Если отрицательного нет верните -1)
//  Тесты:
// console.log(findFirstNegativeIndex([3, 5, -2, 7])); // 2
// console.log(findFirstNegativeIndex([1, 2, 3])); // -1

const arr = [3, 5, -2, 7];
let i = 0;
let n = -1;
function indexOfEl(arr) {
    if (arr.length == i) return n;
    if (arr[i] < 0) return n = arr.indexOf(arr[i]);
    i++
    return indexOfEl(arr)

}
const res = indexOfEl(arr)
console.log(res);


