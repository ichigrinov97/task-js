// 3. Написать функцию, которая принимает одно число n и с помощью цикла for находит такое число x,
// что 𝑥2 = 𝑛. Если точного целого корня не существует,функция должна вернуть-1.
// Входные: findSquareRoot(16) → Результат: 4
// Входные: findSquareRoot(25) → Результат: 5
// Входные: findSquareRoot(10) → Результат:-1
// Входные: findSquareRoot(1) → Результат: 1


const n = 10


const res = (a) =>{
    let n = -1
    for (let i = 0; i < a; i++) {
        if(a == i **2){
            n = i
        }
    }
    return n
}
const result = res(n)
console.log(result);
