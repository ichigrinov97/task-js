// 3. Дан объект с информацией о товарах (например, { product1: 10, product2: 5, product3: 8 }).
// Используя Object.values(), посчитайте общее количество товаров.

const obj = {
    product1: 10,
    product2: 5,
    product3: 8
};

const arrVal = Object.values(obj)
console.log(arrVal);

let res = 0;


for(let el of arrVal){
    res += el
}
console.log(res);
