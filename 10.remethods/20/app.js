// 20. На входе n – количество элементов массива, затем пользователь заполняет массив с клавиатуры.
// Используяметод reduce, объединить все строки в массиве в одну строку,разделенную запятыми.
// Входные: ["apple", "banana", "cherry"] → Результат: "apple,banana,cherry"
// Входные: ["red", "green", "blue"] → Результат: "red,green,blue"


const arr = ["apple", "banana", "cherry"];

const result = arr.reduce(function(str,el){
    return str = arr.join(',')
},'')
console.log(result);
