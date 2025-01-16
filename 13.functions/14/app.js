// 14. На входе массив. Реализуйте 2 функции. Первая для проверки, что в массиве только числа. Вторая 
// для поиска максимального значения в массиве. Если результат функции проверки – true, то 
// вызывать новую функцию, возвращающую максимальное значение массива

const arr = [1, 5, 3, 4]

const isNumb = (a) => a.every((el) => !isNaN(el) ? true : false)

const result = isNumb(arr)


let n = -Infinity;

const maxNumb = (b) => {
    if (result == true) {
        for (let i = 0; i < b.length; i++) {
            if (b[i] > n) n = b[i]
        }
        return n
    }
    return result
}

const max = maxNumb(arr)
console.log(max);
