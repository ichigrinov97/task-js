// 9. Реализуйте поиск максимального числа статичного массива используя рекурсию
//  Входные: [1, 2, 3, 4] → Результат: 4
//  Входные: [10, 5, 8] → Результат: 10

const arr = [10, 5, 8];
let i = 0;
let max = -Infinity;

function maxValue(){
    if(i === arr.length){
        return i;
    }
    if(arr[i]> max){
        max = arr[i]
    }

    i++
    maxValue()
}
maxValue()
console.log(max);

