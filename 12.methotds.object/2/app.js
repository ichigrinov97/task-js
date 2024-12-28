// 2. Дан объект и переменная с названием одного из свойств. Используйте hasOwnProperty,
// чтобы проверить, существует ли это свойство в объекте


const obj = {
    name : 'Vans',
    age : 26 
}

const bool = obj.hasOwnProperty('name') 
console.log(bool);
