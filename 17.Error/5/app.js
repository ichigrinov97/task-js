// 5. Реализуйте функцию, которая принимает число и возвращает возвенную в квадрат каждую
// цифручисла соединяя их. Добавить проверки навводчисла
// 9119-> 811181 (92 === 81, 12=== 1)


const n = '9119';
let res = '';

function sqrtOfN(){
    try {
        if(isNaN(n)){
            throw new Error('это не число')
        }
        for (let i = 0; i < n.length; i++) {
            res +=n[i]**2;
            
        }
        return res;
    } catch (error) {
        return error.message;
    }
}
console.log(sqrtOfN());
