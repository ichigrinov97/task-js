// 12. Написать функцию, которая принимает массив чисел и возвращает разницу между максимальным
// и минимальным элементами.
// Входные: maxMinDifference([1, 2, 3, 4]) → Результат: 3


const arr = [1, 2, 3, 4];
let min = +Infinity;
let max = -Infinity;

const res = (arrTest) =>{
    for (let i = 0; i < arrTest.length; i++) {
        if(arrTest[i] > max){
            max = arr[i]
        }
        
    }
    for (let i = 0; i < arr.length; i++) {
        if(arrTest[i]< min){
            min = arr[i]
        }
        
    }
    return max - min
}
const result = res(arr);
console.log(result);

