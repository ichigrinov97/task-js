// 16. На входе n – количество элементов массива. Далее производится заполнение массива с 
// клавиатуры. Реализуйте 3 функции. Первая для формирования массива. Вторая для проверки, что 
// в массиве только числа. Третья для формирования массива из всех четных чисел, возведенных в 
// квадрат. Если результат функции проверки – true, то вызывать новую функцию, возвращающую 
// массив из всех четных чисел, возведенных в квадрат

const n = 4;
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

const arr2 = [];

const newarr2 = (c) => {
    if (everyNumb == true) {
        for (let i = 0; i < c.length; i++) {
            if (c[i] % 2 == 0) arr2.push(c[i] ** 2)
        }
        return arr2
    }
    return everyNumb

}

const result = newarr2(arr)
console.log(result);

