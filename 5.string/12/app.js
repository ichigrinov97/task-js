// На входе число от 1 до 4, указывающее время суток: 1 — утро, 2 — день, 3 — вечер, 4 — ночь. Выведите соответствующее название времени суток.
//  Решение через: switch ... case.


let a = +prompt('введите данные');


switch(a){
    case 1:
        console.log('утро');
        break;
    case 2:
        console.log('день');
        break;
    case 3:
        console.log('вечер');
        break;
    case 4:
        console.log('ночь');
        break;

}