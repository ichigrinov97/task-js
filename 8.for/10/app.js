// 10. Дан статичный массив и число, вводимое пользователем. Проверьте с помощью цикла for и
//  оператора if, есть ли это числов массиве.Если числанет, то ничегоне отображайтев консоль.
//  Примермассива:[10, 20, 30, 40, 50]
//  Входные: 30 →Результат: Число найдено



let arr = [10, 20, 30, 40 ,50];

let num = '30';

for( let i = 0; i<arr.length; i++){
    if(arr[i]==num){
        console.log('число найдено');
        
    }
}