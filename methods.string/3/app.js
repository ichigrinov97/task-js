// Пользователь вводит строку. Если это число, вывести ошибку. Если строка, узнайте длину,
// приведите к нижнему регистру и удалите пробелы

const a = prompt('введите данные');

if(!isNaN(a)){
    console.log('error');
    
}else if(isNaN(a)){
    console.log(a.length);
    console.log(a.toLowerCase().replaceAll(' ',''));
    
}