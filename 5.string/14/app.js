// Пользователь вводит два числа. Определите, какое из них больше. Если числа равны, верните "Равны". Решение через: тернарный оператор.


let a = +prompt('введите a');
let b = +prompt('введите b');

// if(!isNaN(a) && !isNaN(b)){
//     if(a > b){
//         console.log(a);
        
//     }
//     if(a < b){
//         console.log(b);
        
//     }
//     if(a == b){
//         console.log('числа равны');
        
//     }

// }else{
//     console.log('вы ввели не число');
    
// }
 
(a > b )? console.log(a) :
(a < b) ? console.log(b) : 
(a == b) ? console.log('числа равны'): console.log(null);




