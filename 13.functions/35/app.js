// 17. Создать функцию, которая принимает массив чисел и возвращает индекс самого большого
//  значения.
//  Входные: maxIndex([1, 3, 2]) → Результат: 1

const arr = [1, 3, 2];
let n = 0;

const res = (arrTest) =>{
    let ind = 0;
    for (let i = 0; i < arrTest.length; i++) {
        if(arrTest[i] > n){
            n = arrTest[i]
        }
        if(arrTest[i] == n){
            ind = i
        }
    }

    return ind
}
const result = res(arr);
console.log(result);
