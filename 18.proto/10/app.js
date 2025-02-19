// 11. Напишите функцию, которая принимает объект и возвращает новый объект, содержащий 
// только те пары ключ-значение, где значения являются числами. Используйте for...in. 
// console.log(filterNumericValues({ a: 10, b: "hello", c: 42 })); // { a: 10, c: 42 }
//  console.log(filterNumericValues({ x: "text", y: true, z: null })); // {}


let obj = { a: 10, b: "hello", c: 42 };
let obj2 = {};

function newObj(){
    for(let key in obj){
        if(typeof obj[key] == 'number'){
           obj2[key] = obj[key] ;
        } 
    }
    return obj2;
}
const res = newObj();
console.log(res);
