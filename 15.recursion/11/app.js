// 11.
// На входе целое число n. Найдите сумму цифр числа с использованием рекурсии.
// Входные: 123 → Результат: 6
// Входные: 456 → Результат: 15
// Входные: 987 → Результат: 24

const n = 987;
const str = n.toString();
let i = 0;
let sum = 0;

function doSum (){
    if(i === str.length){
        return i;
    }
    sum += +str[i]

    i++
    doSum()
}
doSum()
console.log(sum);

