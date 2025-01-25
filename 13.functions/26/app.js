// 8. Написать функцию, которая принимает массив чисел и возвращает true, если числа идут в
// порядке возрастания.
// Входные: isAscending([1, 2, 3]) → Результат: true

const arr = [1, 4, 3]

const res = (arrTest) =>{
    let bool = false
    for (let i = 0; i < arrTest.length; i++) {
        if(i == arr.length - 1){
            break
        }
       if(arrTest[i] < arrTest[i+1] ){
        bool = true
       }else{
        bool = false
        break
       }
    }
    return bool
}
const result = res(arr)
console.log(result);
