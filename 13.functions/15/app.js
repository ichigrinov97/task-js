// 15. На входе n – количество элементов массива. Далее производится заполнение массива с 
// клавиатуры. Реализуйте 3 функции. Первая для формирования массива. Вторая для проверки, что 
// в массиве только числа. Третья для получения произведения всех элементов массива. Если 
// результат функции проверки – true, то вызывать новую функцию, возвращающую произведение 
// всех элементов массива

const n = 6;
const arr = [];

const arrConstruct = (a) => {
    for (let i = 0; i < n; i++) {
        a.push(prompt());
    }
    return a
}

const newArr = arrConstruct(arr)

const isNumb = (b) => b.every((el) => !isNaN(el) ? true : false)

const everyNumb = isNumb(arr)


let res = 1;

const newRes = (c) => {
    if (everyNumb == true) {
        for (let i = 1; i < c.length; i++) {
            res *= c[i]
        }
        return res
    }
    return everyNumb
}

const newResult = newRes(arr)
console.log(newResult);
