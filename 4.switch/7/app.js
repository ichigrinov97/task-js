// Пользователь вводит номер месяца. Необходимо вывести пору года по номеру месяца. Добавьте
//  проверку, чтобыубедиться, что введенные значения —числа.(Решитьзадачу через switch … case)



let a = +prompt('введите данные');

if(!isNaN(a)){
    switch(a){
        case 1:
        console.log('Зима');
        break;
        case 2:
        console.log('Зима');
        break;
        case 3:
        console.log('Весна');
        break;
        case 4:
        console.log('Весна');
        break;
        case 5:
        console.log('Весна');
        break;
        case 6:
        console.log('Лето');
        break;
        case 7:
        console.log('Лето');
        break;
        case 8:
        console.log('Лето');
        break;
        case 9:
        console.log('Осень');
        break;
        case 10:
        console.log('Осень');
        break;
        case 11:
        console.log('Осень');
        break;
        case 12:
        console.log('Зима');
        break;
        
    
}
}else{
    console.log('неверные данные');
}


