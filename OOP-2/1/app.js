// 1.
//  Создайте класс Rectangle, который будет иметь свойства width и height. Напишите метод getArea(), 
// которыйвозвращаетплощадьпрямоугольника.
//  Входные: Rectangle(5, 10) → Результат: 50
//  Входные: Rectangle(3, 7) → Результат: 21
//  Входные: Rectangle(6, 9) → Результат: 54



class Rectangle {
    constructor(width,height){
        this.width = width;
        this.height = height;
    }

    getArea(){
        console.log(this.width * this.height);
        
    }
}

const res = new Rectangle(5,10)
res.getArea()
