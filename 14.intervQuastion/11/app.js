// На входе динамичный массив; число n с клавиатуры. Необходимо написать функцию,
// возвращающую
// элементы
// массива,
// которые
// больше
// указанного
// числа.
// [1, 9, 45, 11, 10], 10 -> 45, 11


const arr = [];
const n = +prompt('введите число');

const res = (arrT) => {
    for (let i = 0; i < 5; i++) {
            arrT.push(+prompt('введите значение массива'));
    }
    const newarr = arrT.filter(el => el > n)
    return newarr.join(',');
}
const result = res(arr);
console.log(result);

