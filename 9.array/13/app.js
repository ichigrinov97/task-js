// 13. Сформируйте массив из 10 значений prompt. Создайте строку из элементов массива, разделённых
//  дефисами.
//  Метод: Используйтециклfor.
//  Входные: [1, 2, 3, 4, 5, 6, 7, 8, 9] → Результат: '-1-2-3-4-5-6-7-8-9-'
//  Входные: [2, 4, 6] → Результат: '-2-4-6-'
//  Входные: [0] → Результат: '-0-


const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let str = '';
for(let i = 0;i<arr.length;i++){
    str += '-' + arr[i] 
    if(i == arr.length -1){
        str += '-'
        
    }
    

}console.log(str);