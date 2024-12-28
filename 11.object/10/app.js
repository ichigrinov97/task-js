// 10. На входе  объект с ключами name, age,birthday, значениякоторых–пустыестроки.Необходимо
// считать данные склавиатуры и заполнить объект соответствующими данными,добавив проверки
// на ввод

const obj = {
    name: '',
    age: '',
    birthday: ''
}

for(let key in obj){
    const inpt = prompt(`введите ${key}` )

    if(inpt.length == 0){
        continue
    }

    obj[key] = inpt;
}
console.log(obj);

















// obj.name = prompt('введите имя')
// if (isNaN(obj.name)) {

//     console.log(obj.name);

// } else {
//     console.log('неверные данные');

// }
// obj.age = prompt('введите возраст');
// if (!isNaN(obj.age)) {
//     console.log(obj.age);

// } else {
//     console.log('неверные данные');

// }
// obj.birthday = prompt('введите дату');
// if (!isNaN(obj.birthday)) {
//     console.log(obj.birthday);

// } else {
//     console.log('неверные данные');

// }