// 15. Написать функцию, которая принимаетобъекти возвращаетмассиввсехуникальныхзначений.
// Входные: uniqueObjectValues({a: 1, b: 2, c: 1}) → Результат: [1, 2]

const obj = {a: 1, b: 2, c: 1};

const res = (objTest) =>{
    const arr = Object.values(objTest)
    let newarr =[]
    for (let i = 0; i < arr.length; i++) {
        if(!newarr.includes(arr[i])){
            newarr.push(arr[i])
        }
        
        
    }
    return newarr
}
const result = res(obj);
console.log(result);
