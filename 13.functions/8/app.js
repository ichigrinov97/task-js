// 8. На входе массив. Реализуйте 2 функции. Первая для проверки, что в массиве только числа. Вторая 
// для получения только четных элементов массива. Если результат функции проверки – true, то 
// вызывать новую функцию, возвращающую массив с четными элементами массива

const arr = [1, 2, 3, 4, 5, 'el']
const arr2 = []

function onlyNumb(arrTest) {
    const res = arrTest.every(function (el) {
        if (!isNaN(el)) {
            return true
        } else {
            return false
        }
    })
    return res
}
const bool = onlyNumb(arr)
console.log(bool);

function ChetNumb(arrCh) {
    for (let i = 0; i < arrCh.length; i++) {
        if (bool == true && arrCh[i] % 2 == 0) {
            arr2.push(arrCh[i])
        }
    }
    return arr2
}

const b = ChetNumb(arr)
console.log(b);

