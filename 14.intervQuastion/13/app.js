// Напишите функцию, принимающую в качестве параметра статичный объект. Функция
//  возвращает новый объект, где значения– исключительно числа первоначального объекта. 
// IIFE

const obj = {name: 'ivan', age: 26 , id: 97};
const obj2 = {};
(function (obj){
    for(let key in obj){
        if(!isNaN(obj[key])){
            obj2[key] = obj[key]
        }
    }
    console.log(obj2);
    
})(obj)