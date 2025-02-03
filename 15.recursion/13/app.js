// // Задача 1: Найти факториал числа
// // Тесты
// console.log(factorial(5)); // 120
// console.log(factorial(0)); // 1
// console.log(factorial(1)); // 1


let i = 1;
let result = 1;
function fac (){
    if(i === 6){
        return;
    }
    
    
    result *= i;
    i++
    fac()
}
fac();
console.log(result);
