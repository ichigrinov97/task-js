// 6. На входе n– количество элементов массива, затем пользователь заполняет массив с клавиатуры.
// Используяметодevery, вывестиtrue, если все элементы массива являются числами,иначе false.
// Входные: [1, 2, 3, 4] → Результат: true
// Входные: [1, 'a', 3, 4] → Результат: false

const arr = [1, 'a', 3, 4];


const result = arr.every(function(el){
    return !isNaN(el);
})
console.log(result);
