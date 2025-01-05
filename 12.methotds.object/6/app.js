// 6. Дан объект и строка. Используя Object.keys(), проверьте, существует ли в объекте свойство с
// таким именем. Выведите true или false.

const obj = {
    name : 'Vans',
    age :26
};

const str = 'name'
const arrVal = Object.keys(obj)

console.log(arrVal.includes(str));


// console.log(arrVal);


// const res = arrVal.some(function(el){
//     if(el == str){
//         return true;
        
//     }else{
//         return false;
        
//     }
// })
// console.log(res);









