// 9. Даны два объекта. Создайте новый объект, включив в него только те свойства, которые есть в
// обоих исходных объектах. Используйте hasOwnProperty для проверки.

const obj1 = {
    name : 'Vans',
    age : 26 ,
    city : 'Minsk'
};

const obj2 = {
    age : 25 ,
    city : 'Minsk'
};

const obj3 = {};


for (const key1 in obj1) {
    if (obj2.hasOwnProperty(key1) && obj2[key1] === obj1[key1]) {
        obj3[key1] = obj1[key1]
        
        
    }
}
console.log(obj3);


// for( const key1 in obj1){
//     for (const key2 in obj2) {
//         if(key1 === key2 && obj1[key1] === obj2[key2])
//             obj3[key1] = obj1[key1]
//         }
//     }
//     console.log(obj3);
    
    



