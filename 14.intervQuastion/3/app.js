// Напишите функцию, которая принимает строку из чисел ‘12345’ и возвращает значение в
//  обратном порядке ‘54321’. IIFE

const str = '12345';

(function (){
    console.log(str.split('').reverse().join(''));
})()