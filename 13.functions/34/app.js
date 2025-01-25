// 16. Создать функцию, которая принимает массив чисел и возвращает true, если сумма четных чисел
// равна сумменечетных.
// Входные: isBalanced([2, 4, 1, 5]) → Результат: true

const arr = [2, 4, 1, 5];

const res = (arrTest) => {
    let chet = [];
    let nechet = [];
    for (let i = 0; i < arrTest.length; i++) {
        if (arrTest[i] % 2 == 0) {
            chet.push(arrTest[i]);
        } else {
            nechet.push(arrTest[i])
        }
    }
    const sumchet = chet.reduce((sum1, el1) => sum1 += el1, 0);
    const sumnechet = nechet.reduce((sum2, el2) => sum2 += el2, 0);
    let bool = false;
    if(sumchet == sumnechet){
        bool = true
    }else{
        bool
    }


    return bool
}
const result = res(arr);
console.log(result);
