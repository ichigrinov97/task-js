// Пользователь вводит число от 1 до 7, указывающее день недели. Выведите название
// соответствующего дня недели.(Решить задачу через: if … else,switch … case

let a = +prompt('введите значение');


// if (a === 1) {
//     console.log('пн');

// } else if (a === 2) {
//     console.log('вт');

// } else if (a === 3) {
//     console.log('ср');

// } else if (a === 4) {
//     console.log('чт');

// } else if (a === 5) {
//     console.log('пт');

// } else if (a === 6) {
//     console.log('сб');

// } else if (a === 7) {
//     console.log('вс');

// }else{
//     console.log('неверные данные');
    
// }

switch(a){
    case 1:
        console.log('пн');
        break

    case 2:
        console.log('вт');
        break

    case 3:
        console.log('ср');
        break

    case 4:
        console.log('чт');
        break

    case 5:
        console.log('пт');
        break

    case 6:
        console.log('сб');
        break

    case 7:
        console.log('вс');
        break

        
}