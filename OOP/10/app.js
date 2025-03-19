// 1.
//  Создайте класс Car, воспользуйтесь конструктором для задания модели и года выпуска 
// автомобиля. Добавьте метод start, который возвращает строку: Машина {model} завелась.


class Car{
    // model = 'BMW';
    // year= '2005';

    // constructor(model,year){
    //     this.model = model;
    //     this.year = year;
    // }

    start(model,year){
        console.log(`Машина ${year} года ${model} завелась `); 
    }
}

const car = new Car();
car.start('Bmw' , '2005');