// Пользователь вводит одно из названий домашних животных: "собака", "кошка", "попугай", "рыбка". 
// Выведите соответствующий тип животного: "Млекопитающее", "Млекопитающее", "Птица", "Рыба". Решение через: switch ... case.


let a =prompt('введите название животного');


switch(a){
    case 'собака':
        console.log('млекопитающее');
        break;
    case 'кошка':
        console.log('млекопитающее');
        break;
    case 'попугай':
        console.log('птица');
        break;
    case 'рыбка':
        console.log('рыба');
        break;
        
}