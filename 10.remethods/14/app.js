// 14. Пользователь вводит два массива чисел. Используя оператор spread, объедините эти два массива
//  в один.
//  Входные: [1, 2, 3] и [4, 5, 6] → Результат: [1, 2, 3, 4, 5, 6]
//  Входные: [7, 8] и [9, 10, 11] → Результат: [7, 8, 9, 10, 11]


const arr = [];
const arr2 = [];

for (let i = 0; i < 3; i++) {
    const valueforarr = prompt('first colection');
    const valueforarr2 = prompt('second colection');
    

    arr.push(valueforarr);
    arr2.push(valueforarr2);

}


console.log([...arr, ...arr2]);
