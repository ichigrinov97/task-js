// Пользователь вводит число: 1,2,3 или 4.Еслив веденное значение равно'1', то вывести в консоль
// 'зима';если'2'–'весна'итакдалее.Добавьтепроверкунавводтолькочисел.Решитезадачучерез
// switch-case


let a = +prompt('введите значение');


if(!isNaN(a) && a <= 4){
    switch(a){
        case 1:
            console.log('зима');
            break
        case 2:
            console.log('весна');
            break
        case 3:
            console.log('лето');
            break
        case 4:
            console.log('осень');
            break
    }

}else{
    console.log('не верное значение'); 
}