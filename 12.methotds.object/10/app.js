// 10. Есть объект с информацией о пользователе. С помощью деструктуризации получите имя и
// возраст, и выведите их.

const about = {
    name: 'Vans',
    age: 26,
    city : 'Minsk',
    school: 'hshool',
    country: 'Belarus'
}

const {name , age} = about

console.log(name);
console.log(age);

