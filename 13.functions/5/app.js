// 5. На входе массив. Необходимо создать функцию проверки на то что в массиве только числа. 
// Функция возвращает true, если в массиве только числа и false в противном случае

const arr = [1, 2, 3, 'el'];

function onlyNum(a) {
    const result = arr.every(function(el) {
        if(!isNaN(el)){
            return true
        }else{
            return false
        }
    })
    return result
}

console.log(onlyNum(arr));



