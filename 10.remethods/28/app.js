// 28. На входе n– количество элементов массива, затем пользователь заполняет массив с клавиатуры.
//  Использовать метод map для создания нового массива, где все строки преобразованы в верхний
//  регистр.
//  Входные: ["apple", "banana", "cherry"] → Результат: ["APPLE", "BANANA", "CHERRY"]
//  Входные: ["dog", "cat"] → Результат: ["DOG", "CAT"]
//  Входные: ["hschool", "company"] → Результат: ["HSCHOOL", "COMPANY"]

const arr = [];

for (let i = 0; i < 3; i++) {
    const valuearr = prompt();
    arr.push(valuearr);
    
}
const result = arr.map(function(el){
    return el.toUpperCase()
})
console.log(result);
