// 5. На входе число n = 2, step = 5. Возведите n в степень step используя рекурсию
// Входные: 2, 5 → Результат: 32
// Входные: 3, 4 → Результат: 81

const n = 3;
const step = 4;
let i = 0;
let result = 1;
function res (){
    if(i === step){
        return i;
    }

    i++
    res()
}
res()
console.log(n ** i);



