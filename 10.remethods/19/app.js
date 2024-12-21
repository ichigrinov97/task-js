// 19. На входе n– количество элементов массива, затем пользователь заполняет массив с клавиатуры.
// Используя метод reduce, посчитать количество чисел в массиве.
// Входные: [1, 'a', 3, 'b', 5] → Результат: 3
// Входные: ['apple', 'banana', 'cherry'] → Результат: 0

const arr = [1, 'a', 3, 'b', 5];
const result =[];
for (let i = 0; i < 6; i++) {
    if(!isNaN(arr[i])){
        result.push(arr[i]);
    }
    
}
const mainres = result.reduce(function(mid, el){
    return mid += 1
}, 0)
console.log(mainres);
