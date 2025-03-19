// 2. Создайте класс Counter, при этом в конструкторе не требуется передавать параметры. 
// Инициализируйте внутреннее свойство count со значением 0. Реализуйте методы increment
//  (увеличивает счётчик на 1) и getCount (возвращает текущее значение счётчика).
//  const c = new Counter();
//  c.increment();
//  c.increment();
//  console.log(c.getCount()); // 2

class Counter{
    count = 0;

    increment(){
        return this.count += 1;
    }
    getCount(){
        return this.count;
    }
}

const c = new Counter();
c.increment();
c.increment();
console.log(c.getCount());
