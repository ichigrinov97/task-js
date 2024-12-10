// 11.
//  Выведите каждый элемент массива[1, 2, 2, 3, 4, 4, 3, 4, 5] без повторений.
//  Методы: Используйтециклыfor, for...of.
//  Входные: [1, 2, 2, 3, 4, 4, 3, 4, 5] → Результат: [1, 2, 3, 4, 5]

const arr = [1, 2, 2, 3, 4, 4, 3, 4, 5];

let res =[];


// for(let i = 0; i<arr.length; i++){
//     if(!res.includes(arr[i])){
//         res.push(arr[i]);
//     }
// }console.log(res);


for(let li of arr){
    if(!res.includes(li)){
        res.push(li);
    }
}console.log(res);


