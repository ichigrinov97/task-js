// 9. Используйте комбинацию reduce и map, чтобы найти объект с максимальным значением 
// указанного ключа. 
// findMaxByKey([{ name: "Alice", age: 25 }, { name: "Bob", age: 30 }, { name: "Charlie", age: 20 }], "age"); 
// // { name: "Bob", age: 30 }


const arr = [{ name: "Alice", age: 25 }, { name: "Bob", age: 30 }, { name: "Charlie", age: 20 }];


function whatMaxAge (){
    let max = 0;
    let obj ={};
    const newarr = arr.map(el =>{
        if(el.age > el[0][age]){
            return obj = el;
        }
    }) 

    return obj;
}

const res = whatMaxAge();
console.log(res);
