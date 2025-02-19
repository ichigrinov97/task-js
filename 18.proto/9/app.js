// 0. Используйте Object.values и filter, чтобы определить, сколько значений объекта являются 
// строками.
//  console.log(countStringValues({ a: "hello", b: 42, c: "world" })); // 2
//  console.log(countStringValues({ x: 1, y: true, z: null })); // 0

const obj = { x: 1, y: true, z: null };

let value = 0;

function howMuchStr(){
    const arrofobj = Object.values(obj);
    for (let i = 0; i < arrofobj.length; i++) {
        if(typeof arrofobj[i] == 'string'){
            value += 1;
        }
        
    }
    return value;
}
console.log(howMuchStr());
