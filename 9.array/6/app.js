// 6. Найдитесуммуэлементовмассива[1, 2,3, 4, 5].
//  Методы: Используйтециклfor...of.
//  Входные: [1, 2, 3, 4, 5] → Результат: 15


const arr = [1, 2,3, 4, 5];

let result = 0;

for(let sum of arr){
    result += sum;
}console.log(result);
