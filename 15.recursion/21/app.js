// // Задача 9: Удалить все вхождения элемента из массива
// // Тесты
// console.log(removeElement([1, 2, 3, 2, 4], 2)); // [1, 3, 4]
// console.log(removeElement([5, 5, 5], 5)); // []
// console.log(removeElement([], 1)); // []

const arr = [1, 2, 3, 2, 4];
const n = 2;
const newarr = [];
function deleteVal(arr){
    if(arr.length === 0) return newarr;
    if(arr[0]!== n) newarr.push(arr[0])
    return deleteVal(arr.slice(1));
}
const result = deleteVal(arr);
console.log(result);
