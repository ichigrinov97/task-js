// 1.
//  Создайте класс Shop, в котором с помощью конструктора задается массив товаров products. 
// Каждый товар должен быть объектом с полями name (название) и price (цена). Реализуйте метод 
// getExpensiveProducts(minPrice), который возвращает массив товаров, цена которых больше либо 
// равна значению minPrice. Для фильтрации воспользуйтесь методом filter. Также реализуйте метод 
// getProductNames(), который возвращает массив названий всех товаров (используйте метод map).
//  const shop = new Shop([
//  { name: "Хлеб", price: 40 },
//  { name: "Молоко", price: 60 },
//  { name: "Сыр", price: 150 }
//  ]);
//  console.log(shop.getExpensiveProducts(50));
//  // [{ name: "Молоко", price: 60 }, { name: "Сыр", price: 150 }]
//  console.log(shop.getProductNames());
//  // ["Хлеб", "Молоко", "Сыр"]

class Shop{
    products = [];

    constructor(products){
        this.products = products;
    }
    getExpensiveProducts(minPrice){
        const ourlist = this.products.filter(function(el){
            if(el.price >= minPrice){
                return true
            }
        })
        return ourlist;
    }
    getProductNames(){
        const prod = this.products.map(function(el){
            return el.name;
        })
        return prod;
    }
}
const shop = new Shop([
    { name: "Хлеб", price: 40 },
    { name: "Молоко", price: 60 },
    { name: "Сыр", price: 150 }
    ]);
console.log(shop.getExpensiveProducts(50));
console.log(shop.getProductNames());

