// 26. Дана строка. Напишите программу, которая с помощью цикла for подсчитывает количество
//  гласных букввстроке. Гласные: a, e, i, o, u.
//  Входные: "Hello!"
//  Результат: Количество гласных: 2
//  Входные: "Sky"
//  Результат: Количество гласных: 0


let str = 'sky';

let hm = 0;


for(let i = 0; i<str.length;i++){
    if('aeiou'.includes(str[i])){
        hm += 1; 

    }
}console.log(hm);

