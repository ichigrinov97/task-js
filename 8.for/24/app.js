// 24. Дана строка. Напишите программу, которая с помощью цикла for подсчитывает количество
//  символоввстрокебезучетапробелов.
//  Входные: "Hello World!"
//  Результат: Количество символов: 11
//  Входные: " JavaScript is awesome! "
//  Результат: Количество символов: 20


let str = "JavaScript is awesome!";
let strsum = 0;

for(let i = 0;i<str.length; i++){
    if(str[i]==' '){
        continue
    }else{
        strsum += 1
    }
    
    
}console.log(strsum);