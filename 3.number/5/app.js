// Даны переменные a и b. Проверьте, что a делится без остатка на b. Если это так — выведите
// «Делится» и результат деления, иначевыведите «Делитсяс остатком» и само значениеделения.


let a = prompt('введите число a');
let b = prompt('введите число b');

if(a % b == 0){
    console.log(a / b);
    
} else if(a % b !== 0){
    console.log(a % b);
    
}