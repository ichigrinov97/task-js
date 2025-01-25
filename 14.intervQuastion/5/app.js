// Напишите функцию, которая принимает адрес электронной почты и возвращает объект с
//  полями email и active. Поле active должно быть true, если адрес содержит символ '@' и '.com’
//  / ‘.by', и false в противном случае.

const input = 'hschool@gmail.com';
const obj = {};
const res = (bool) =>{
    if(bool.includes('@')&& bool.includes('.com') || bool.includes('.by')){
        obj['email'] = input
        obj['active'] = true
    }else{
        obj['active'] = false
    }
 return obj   ;
}
const result = res(input);
console.log(result);
