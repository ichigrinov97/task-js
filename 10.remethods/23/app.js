// 23. На входе n– количество элементов массива, затем пользователь заполняет массив с клавиатуры.
// Проверить, содержитли массив только четные числа.Использовать метод every.
// Входные: [2, 4, 6, 8] → Результат: true
// Входные: [2, 3, 4, 6] → Результат: false
// Входные: [4, 6, 8, 10] → Результат: true


const arr = [];

for (let i = 0; i < 4; i++) {
    const valuearr = prompt();
    arr.push(valuearr);
}

const result = arr.every(function(el){
    if(el % 2 == 0){
        return true
    }else{
        return false
    }
})
console.log(result);
