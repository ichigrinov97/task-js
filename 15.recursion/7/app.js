// 7. Вычислить факториал числа используя рекурсию
// Входные: 4 → Результат: 24
// Входные: 5 → Результат: 120
// Входные: 3 → Результат: 6


const n = 4;
let i = 1;
let result = 1;

function fact (){
    if(i === n+1){
        return i;
    }
    
    result *=i;
    i++
    fact()
}
fact();
console.log(result);
