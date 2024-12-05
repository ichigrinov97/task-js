// 6. На входе массив [1, 'hi', 2, 'hello', 3]. Переберите все элементы массива циклом for. Каждый элемент
//  проверитьнаisNaN
//  Входные: [1, 'hi', 2, 'hello'] → Результат:
//  Число1
//  Строка hi
//  Число2
//  Строка hello


let arr = [1, 'hi', 2, 'hello'];

for(let i = 0; i<arr.length; i++){
    if(isNaN(arr[i])){
        
        console.log('строка ' + arr[i]);
        
        
    }else{
        console.log('число ' + arr[i]);
    }
}