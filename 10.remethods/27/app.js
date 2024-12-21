// 27. На входе n– количество элементов массива, затем пользователь заполняет массив с клавиатуры.
// Создать новый массив,содержащийстроки длиной менее 5символов.Использовать метод filter.
// Входные: ["apple", "banana", "cat"] → Результат: ["cat"]
// Входные: ["dog", "cat", "apple"] → Результат: ["dog", "cat"]
// Входные: ["hschool", "company"] → Результат: []

const arr = [];

for (let i = 0; i < 3; i++) {
    const valuearr = prompt();
    arr.push(valuearr);
}
const result = arr.filter(function(el){
    if(el.length < 5){
        return el
    }
})
console.log(result);
