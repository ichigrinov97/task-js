// 7. Создайте родительский класс NumberGenerator, который будет генерировать и возвращать
// случайное число с помощью метода generateNumber(). Затем создайте дочерний класс
// SquareRootCalculator, который переопределяет метод generateNumber() и находит квадратный
// корень этогочисла безиспользованиявстроеннойфункцииMath.sqrt().
// Входные: new SquareRootCalculator().generateNumber() (предположим, сгенерированное число 16)→
// Результат: 4
// Входные: new SquareRootCalculator().generateNumber() (предположим, сгенерированное число 25) →
// Результат: 5


class NumberGenerator{
    generateNumber(){
       return Math.round(Math.random()* 100)         
    }
}





class SquareRootCalculator extends NumberGenerator{
    
    generateNumber(){
       const value = super.generateNumber();
       console.log(value);
       
        for (let i = 0; i < value; i++) {
            if(i ** 2 == value){
                return i;
                
            }
            
        }
        return 'нет  кв корней'
        
    }
}

const squareRootCalculator = new SquareRootCalculator();

console.log( squareRootCalculator.generateNumber());
