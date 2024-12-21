// 25. На входе n– количество элементов массива, затем пользователь заполняет массив с клавиатуры.
//  Создать новый массив,состоящий из длин строк в исходном массиве.Использовать метод map.
//  Входные: ["apple", "banana", "cherry"] → Результат: [5, 6, 6]
//  Входные: ["dog", "cat"] → Результат: [3, 3]
//  Входные: ["hschool", "company"] → Результат: [7, 7]

const arr =[];

for (let i = 0; i < 3; i++) {
    const valuearr = prompt();
    arr.push(valuearr);
    
}

const result = arr.map(function(el){
    return el.length
})
console.log(result);
