// 14. *На входе массив чисел. Необходимо найти элемент, который повторяется наибольшее
// количество раз. Если таких элементов несколько,можно вернуть любой из них.
// Входные: [1, 2, 3, 1, 2, 1] → Результат: 1
// Входные: [5, 5, 6, 6, 6, 7] → Результат: 6


const arr = [5, 5, 6, 6, 6, 7];

const obj = {}

for(let el of arr){
    if(obj[el]){
        obj[el] += 1
    }else{
        obj[el] = 1
    }
}
console.log(obj);

let max = -Infinity;
let number_max = '';

for(let key in obj){
    if(obj[key]> max){
        max = obj[key];
        number_max = key;
    }

}
console.log(` значение ${number_max} повторяется большее количество раз`);

