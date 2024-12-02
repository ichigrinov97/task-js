// Найдите квадратный кореньиз введенного числа.Если результат—дробное число,округлите его
//  до ближайшего целого.Добавьте проверку, чтобы убедиться, что введено число. (Решитьзадачу
//  через: if … else, тернарныйоператор)


let a = prompt('введите значение');


if(!isNaN(a)){
   let b = Math.sqrt(a)
//    if(!Number.isInteger(b)){
//     console.log(Math.round(b));
//    } else{
//     console.log(b);
    
//    }

!Number.isInteger(b) ? console.log(Math.round(b)) : console.log(b) ;

}else{
    console.log('неверные данные');
    
}


