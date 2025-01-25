// 13. Создать функцию, которая принимает строку и возвращает true, если в строке больше гласных, чем
//  согласных.
//  Входные: moreVowels('hello') → Результат: false

const str = 'hello'.toLowerCase();
const gl = ['e','y','u','o','i','a'];
const sgl = ['q','w','r','t','p','s','d','f','g','h','j','k','l','z','x','c','v','b','n','m'];

const res = (strTest) => {
    const arr = strTest.split('');
    let countGl = 0;
    let countSgl = 0;
    for (let i = 0; i < arr.length; i++) {
        if(gl.includes(arr[i])){
            countGl +=1
        }
        if(sgl.includes(arr[i])){
            countSgl += 1
        }
    }
       
    
    let bool = false;
    if (countGl > countSgl) {
        bool = true;
    }
    return bool;
}
const result = res(str);
console.log(result);


