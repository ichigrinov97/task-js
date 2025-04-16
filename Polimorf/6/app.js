// 6. Создайте родительский класс Number, который будет хранить статичное число. Затем создайте
//  дочерний класс SquareRootCalculator, который будет содержать метод calculateSquareRoot(),
//  вычисляющий квадратный кореньэтогочисла без использования встроенной функции Math.sqrt().
//  Входные: new SquareRootCalculator(16) → Результат: 4
//  Входные: new SquareRootCalculator(25) → Результат: 5
//  Входные: new SquareRootCalculator(1) → Результат: 1


class Number{
    constructor(value){
        this.value = value;
    }
}


class SquareRootCalculator extends Number{
    constructor(value){
        super(value)
    }

    calculateSquareRoot(){
        for (let i = 0; i < this.value; i++) {
            if(i ** 2 == this.value){
                console.log(i);
                
            }
            
        }
        
    }
}

const sqareRootCalculator = new SquareRootCalculator(25);
sqareRootCalculator.calculateSquareRoot();