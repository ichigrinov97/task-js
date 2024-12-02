// Пользователь вводит строку. Если это число, вывести ошибку. Если строка, первый символ сделать
// заглавным и удалить пробелы


const a = prompt('введите значения');


// if(!isNaN(a)){
//     console.log('error');
   
// }else{
//     console.log(a[0].toUpperCase() + a.slice(1).toLowerCase());
// }
    

!isNaN(a) ? console.log('error') : console.log(a[0].toUpperCase() + a.slice(1).toLowerCase());


