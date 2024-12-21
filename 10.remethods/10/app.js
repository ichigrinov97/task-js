// 10. На входе n– количество элементов массива, затем пользователь заполняет массив arr с
//  клавиатуры. В памяти также есть статичная переменная со значением "javascript". Создать новый
//  массив из строк массива arr, которые включают значение переменной "javascript". Проверить ввод
//  только текстовых значений. Использоватьметод forEach.
//  Входные: ["I love javascript", "coding", "javascript is fun", "python"] → Результат: ["I love javascript", "javascript is 
// fun"]
//  Входные: ["javascript", "java", "typescript"] → Результат: ["javascript"]


const arr = ["javascript", "java", "typescript"];
const str = 'javascript';
const result = [];

arr.forEach(function(el){
    if(isNaN(el) && el.includes(str)){
        result.push(el)
        

    }
}) 
console.log(result);
