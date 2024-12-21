// 30. На входе n– количество элементов массива, затем пользователь заполняет массив с клавиатуры.
// Найти наименьшее число в массиве. Если в массиве нет чисел, вывести "Нет чисел". Использовать
// метод reduce.
// Входные: [10, 3, 5, 7] → Результат: 3
// Входные: ["apple", "banana", "cherry"] → Результат: "Нет чисел"
// Входные: [50, 20, 30] → Результат: 20


const arr = [50, 20, 30]; //[]

// for (let i = 0; i < 4; i++) {
//     const valueofarr = prompt('');
//     arr.push(valueofarr);

// }

for (let i = 0; i < arr.length; i++) {
    if(!isNaN(arr[i])){

        const res = arr.reduce(function (min, el) {
            if (el < min) {
                return el
            } else {
                return min
            }
            
            
        
        }, +Infinity)
        console.log(res);
    }else{
        console.log('нет чисел');
    }
    
}


