// 21. На входе n– количество элементов массива, затем пользователь заполняет массив с клавиатуры.
// Используяметод reduce, найти максимальное число в массиве.
// Входные: [3, 7, 2, 5] → Результат: 7
// Входные: [1, 9, 8, 3] → Результат: 9
// Входные: [4, 4, 4, 4] → Результат: 4

const arr = [];

for (let i = 0; i < 4; i++) {
    const valueofarr = prompt('');
    arr.push(valueofarr);

}
const res = arr.reduce(function (max, el) {
    if (el > max) {
        return el
    } else {
        return max
    }

}, -Infinity)
console.log(res);
