// 9. Создайте класс DataGenerator с полем size и методом generateArray(), который возвращает массив
// чисел от 1 до size. Наследуйте от него класс SquareArray, добавив метод getSquareArray(), который
// вызывает generateArray() и возвращает массив, где каждый элемент возведенв квадрат.
// Входные: SquareArray(3).getSquareArray() → Результат: [1, 4, 9]
// Входные: SquareArray(5).getSquareArray() → Результат: [1, 4, 9, 16, 25]
// Входные: SquareArray(2).getSquareArray() → Результат: [1, 4]



class DataGenerator{
    size = 3;
    arr = [];
    generateArray(){
        for (let i = 1; i < size; i++) {
            arr.push(Math.round(Math.random()* this.size))
            
        } 
    }
    
}


class SquareArray{
     getSquareArray(){
        
     }
}

const result = new SquareArray();
result.getSquareArray()
