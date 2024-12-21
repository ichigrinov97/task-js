// 7. На входе n– количество элементов массива, затем пользователь заполняет массив с клавиатуры.
//  Вывести сумму всех элементов массива. Добавить проверку на ввод только чисел. Использовать
//  методыforEach или reduce.
//  Входные: [1, 2, 3, 4] → Результат: 10
//  Входные: [5, 10, 15] → Результат: 30
//  Входные: [0, 1, 2] → Результат: 3



const arr = [5, 10, 15];

// let result = 0;

// arr.forEach(function(el){
//     if(!isNaN(el)){
//         result += el;
//     }else{
//         console.log('это не число');
        
//     }
// })
// console.log(result);

const result = arr.reduce(function(sum, el){
    if(!isNaN(el)){
        return sum +=el
    }
}, 0)
console.log(result);



