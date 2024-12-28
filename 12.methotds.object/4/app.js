// 4. Дан объект с оценками студентов (например, { Анна: 95, Иван: 88, Мария: 92 }) и число n
// минимальная оценка. С помощью Object.values() и filter() выберите оценки, которые выше n,
//  и выведите их.

const obj = { Анна: 95, Иван: 88, Мария: 92 };

const n = 90;

const arrVal = Object.values(obj);


const good = arrVal.filter(function(el){
    if(el > n){
        return el
    }
})
console.log(good);
