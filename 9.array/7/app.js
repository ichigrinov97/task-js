// 7. Выведитевсечисла,кратные3,измассива[2, 5, 9, 15, 0, 4].
//  Методы: Используйтециклfor...of.
//  Входные: [2, 5, 9, 15, 0, 4] → Результат: [9, 15, 0]


const arr = [2, 5, 9, 15, 0, 4];

for(let nt of arr){
    if(nt % 3 == 0){
        console.log(nt)
    }

};
