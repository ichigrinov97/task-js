// 18. Написать функцию, принимающую в параметрах дату в формат “xx/xx/xxxx”. Функция должна 
// преобразовать строку в формат “xxxx-xx-xx”. 

const str = '27/06/1998';

const resStr = (a) => a.split('/').reverse().join('-');

const arg = resStr(str);
console.log(arg);
