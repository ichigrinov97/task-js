// 2. Создайте класс Rectangle, в котором с помощью конструктора передаются значения ширины и 
// высоты. Добавьте метод getArea, возвращающий площадь прямоугольника (произведение 
// ширины на высоту).


class Rectangle{
    // width;
    // height;

    // constructor(width,height){
    //     this.width = width;
    //     this.height = height;
    // }

    getArea(width,height){
        console.log(width * height);
    }
}

const rectangle = new Rectangle();
rectangle.getArea(5,10);