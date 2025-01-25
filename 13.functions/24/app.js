// 6. Написать функцию, которая принимает массив чисел и возвращает true, если хотя бы одно из них
// делится на 3.
// Входные: hasMultipleOfThree([1, 4, 6]) → Результат: true


const arr = [1, 4, 6]

const res = (arrTest) =>arrTest.some(el => el % 3 == 0)
const result = res(arr);
console.log(result);
