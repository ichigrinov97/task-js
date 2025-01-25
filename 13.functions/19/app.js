// 1.
//  Создать функцию, которая принимает массив чисел и возвращает их среднее арифметическое.
//  Входные: average([1, 2, 3, 4]) → Результат: 2.5

const arr = [1, 2, 3, 4]

const res = (arrTest) => (arrTest.reduce((sum, el) => sum += el, 0)) / arrTest.length
const result = res (arr)
console.log(result);
