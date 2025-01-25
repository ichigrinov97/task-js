// Написать функцию, которая принимает массив чисел и возвращает его в виде строки, где числа
// разделены тире. Входные: joinWithDash([1, 2, 3]) → Результат: '1-2-3’


const arr = [1, 2, 3];

const res = (arrTest) => arrTest.join('-')
    
const result = res(arr)
console.log(result);
