// Напишите функцию, принимающую в качестве параметра статичный объект. Функция
//  возвращает количество парключ /значение. IIFE

const obj = {name: 'ivan', age: 26};

(function(){
    let count = 0;    
    for(let key in obj){
        if(obj[key]){
            count += 1;
        }
    }
    console.log(count);
    
})()