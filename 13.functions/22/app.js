// 4. Написать функцию, которая принимает массив чисел и возвращает максимальную разницу между
// соседними элементами.
// Входные: maxDifference([1, 3, 6, 10]) → Результат: 4

const arr = [1, 3, 6, 10];

const res = (arrTest) =>{
    let max = 0
    for (let i = 0; i < arrTest.length; i++) {
        if(Math.abs(arrTest[i]-arrTest[i+1]) > max){
            max = arrTest[i]-arrTest[i+1]
        }
        
    }
    return Math.abs(max)
}
const result = res(arr)
console.log(result);
