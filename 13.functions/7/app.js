// 7. На входе массив. Реализуйте 2 функции. Первая для проверки, что в массиве только числа. Вторая 
// для получения суммы всех элементов массива. Если результат функции проверки – true, то 
// вызывать новую функцию, возвращающую сумму всех элементов массива

const arr = [1, 2, 5, 10]

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

function doSum(summ) {
    let res = 0
    if (bool == true) {
        for (let i = 0; i < summ.length; i++) {
            res += arr[i]
        }
    } else {
        console.log('it is not a number');
    }
    return res
}
const b = doSum(arr)
console.log(b);


