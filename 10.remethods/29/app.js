// 29. На входе n– количество элементов массива, затем пользователь заполняет массив с клавиатуры.
// Использовать метод filter, чтобы создать новый массив, содержащий только элементы, которые
// являются положительными числами.
// Входные: [1,-2, 3,-4, 5] → Результат: [1, 3, 5]
// Входные: [0,-10,-20] → Результат: "Массив пуст"
// Входные: [10, 20, 30] → Результат: [10, 20, 30]

const arr = [10, 20, 30];

// for (let i = 0; i < 4; i++) {
//     const valuearr = prompt();
//     arr.push(valuearr);
// }
const result = arr.filter(function(el){
    if(el > 0){
        return el;
    }
})
console.log(result);
