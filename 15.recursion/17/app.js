// // Задача 5: Проверить, содержится ли элемент в массиве
// // Тесты
// console.log(contains([1, 2, 3], 2)); // true
// console.log(contains([1, 2, 3], 4)); // false
// console.log(contains([], 1)); // false

const arr = [1, 2, 3];
const n = 2;


function includesOfArr (arr){
    if(arr.length === 0){
        return false;
    }
    if(arr[0] === n){
        return true;
    }

    return includesOfArr(arr.slice(1));
}
const res = includesOfArr(arr);
console.log(res);
