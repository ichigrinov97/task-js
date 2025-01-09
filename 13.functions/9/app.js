// 9. На входе число. Необходимо создать функцию, возвращающую факториал числа
//  4! = 1 * 2 * 3 * 4

const n = 4

function faktor(x){
    let res = 1
    for (let i = 1; i <= x; i++) {
        res *= i  
        
    }
    return res
}
console.log(faktor(n));


