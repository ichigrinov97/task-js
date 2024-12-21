// 26. На входе n – количество элементов массива, затем пользователь заполняет массив с клавиатуры.
// Вывести true, если все строкив массивеимеют длину более 3 символов.Использовать метод every.
// Входные: ["apple", "banana", "cherry"] → Результат: true
// Входные: ["dog", "cat", "apple"] → Результат: false
// Входные: ["hschool", "company", "cherry"] → Результат: true

const arr = [];

for (let i = 0; i < 3; i++) {
    const valuearr = prompt();
    arr.push(valuearr);
}

const result = arr.every(function(el){
    if(el.length > 3){
        return true
    }else{
        return false
    }
})
console.log(result);
