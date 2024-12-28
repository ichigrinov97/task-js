// 12. На входе пустой объект и количество элементов массива n. Введите с клавиатуры n чисел,
//  сформируйте массив, а затем добавьте в объект ключ sum, значением которого будет сумма
//  элементов массива. Добавьте проверки на ввод чисел.

const obj = {}

const arr = []
let result = 0;
for(let i = 0; i< 4; i++){
    let value = prompt()
    if (!isNaN(value)) {
        arr.push(value)

        
    }
    result += +arr[i]

    
}
obj.sum = result
console.log(obj);


