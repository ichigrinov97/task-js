// 18. На входе n– количество элементов массива, затем пользователь заполняет массив с клавиатуры.
//  Используя метод reduce, найти произведение всех чисел в массиве.
//  Входные: [2, 3, 4] → Результат: 24
//  Входные: [1, 5, 10] → Результат: 50


const arr = [];

for (let i = 0; i < 3; i++) {
   const valuearr = prompt();
   arr.push(valuearr);
    
}
const result = arr.reduce(function(mid,el){
    return mid *=el;
},1)

console.log(result);
