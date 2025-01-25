// Напишите функцию, которая принимает массив чисел и находит минимальное и
//  максимальное значения в этом массиве. Добавьте проверки на ввод и выведите сообщение
//  обошибке, еслизначениямассива несоответствуют условиям задачи.


const arr = [1, 2, 5, 7, 9];

const res = (arrTest) =>{
    let max = -Infinity;
    let min = +Infinity;
    const bool = arr.every(el => !isNaN(el)? true : false)
    if(bool == false) return 'условия не соответствуют'
    for (let i = 0; i < arr.length; i++) {
        if(bool == true && arrTest[i] > max) max = arrTest[i]
        if(bool == true && arrTest[i] < min) min = arrTest[i]
    }
    return {min:min, max:max}
    
}
const result = res(arr);
console.log(result);
