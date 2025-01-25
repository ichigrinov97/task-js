//  14. Написать функцию, которая принимаетмассив строк ивозвращаетсамуюдлиннуюстроку.
//  Входные: longestString(['a', 'abcd', 'abc']) → Результат: 'abcd’

const arr = ['a', 'abcd', 'abc'];
let maxstr = arr[0]
const res = (arrTest) =>{
    for (let i = 0; i < arrTest.length; i++) { 
        if(arr[i].length> maxstr.length){
            maxstr = arr[i]
        }  
    }
    return maxstr
}
const result = res(arr);
console.log(result);
