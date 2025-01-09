// 6. На входе n – количество элементов массива. Далее производится заполнение массива с 
// клавиатуры. Реализуйте 2 функции. Первая для формирования массива. Вторая для нахождения 
// количества элементов массива


const n = 6;
const arr = []

function doArr(arrTest) {
    for (let i = 0; i < n; i++) {
        const valueofArr = prompt('push val');
        arr.push(valueofArr)
    } 
    return arrTest
}
const newarr = doArr(arr)
console.log(newarr);

function hMelements(arrTest) {
    return arrTest.length
}
console.log(hMelements(arr));






