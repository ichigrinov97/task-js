// Пользовательвводитсклавиатурыдвачисла:aиb.Проверьте,чтоaделитсябезостатканаb.Если
//  этотак—выведите«Делится»ирезультатделения,иначевыведите«Делитсясостатком»иостаток
//  отделения.


let a = prompt('введите a');
let b = prompt('введите b');


if(a % b == 0){
    console.log('делится,', 'результат =', a / b);
    
}else if(a % b !== 0)
    console.log('делится с остатком,', 'остаток =', a % b);
    