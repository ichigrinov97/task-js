// 8. Вычислите сумму массива чисел статичного массива используя рекурсию
// Входные: [1, 2, 3, 4] → Результат: 10
// Входные: [10, 20, 30] → Результат: 60

const arr = [10, 20, 30];
let i = 0;
let sum = 0;
function doSum (){
    if(i === arr.length){
        return i;
    }    

    sum += arr[i];
    i++
    doSum()
}
doSum();
console.log(sum);
