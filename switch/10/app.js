// Напишите программу, которая находит полное число метров по заданному числу сантиметров.
//  Добавьте проверку на ввод только чисел


let a = +prompt('введите данные');
let b = a / 100;


if (!isNaN(a)) {
    
    if (!Number.isInteger(b) || Number.isInteger(b) ) {
        console.log(Math.floor(b), 'метров');
    }
} else {
    console.log('неверное значение');

}
