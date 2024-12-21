// 11.
// На входе n– количество элементов массива, затем пользователь заполняет массив с клавиатуры.
// Создать новый массив, где каждый элемент преобразуется в строку вида #name. Использовать
// методыmapиforEach.
// Входные: ["hschool", "company"] → Результат: ["#hschool", "#company"]
// Входные: ["apple", "banana"] → Результат: ["#apple", "#banana"]
// Входные: ["car", "bike", "bus"] → Результат: ["#car", "#bike", "#bus"]



const arr = ["car", "bike", "bus"];

// let result = [];

// arr.forEach(function(el){

//     result.push('#' + el);

// })
// console.log(result);

const result = arr.map(function(el){
    return "#" + el;
})
console.log(result);
