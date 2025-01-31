// 6. На входе массив array. Посчитайте количество элементов массива используя рекурсию
//  Входные: [1, 2, 3, 4] → Результат: 4
//  Входные: [10, 20, 30] → Результат: 3


const arr = [1, 2, 3, 4, 5];
let i = 0;

function arrayLenght() {
    if (i === arr.length) {
        return i;
    }

    i++


    arrayLenght()
}
arrayLenght()
console.log(arr.length);