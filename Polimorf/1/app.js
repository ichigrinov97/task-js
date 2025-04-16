// 1.
//  Создайте класс Product, который будет иметь свойства name, price и quantity. Напишите метод
//  getTotalCost(products), который принимает список продуктов и возвращает общую стоимость всех
//  товаров в каталоге.
//  Входные: Product("Apple", 2, 5) → Результат: 10
//  Входные: Product("Orange", 3, 4)→ Результат: 12


class Product{
    constructor(name,price,quantity){
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }

    getTotalCost(){
        console.log( this.price * this.quantity);
        
    }
}

const products = new Product("Apple", 3, 5);

products.getTotalCost();