// 5. Создайте класс NumberGenerator с методом generateNumbers(size), который возвращает массив
//  чисел от 1 до size. Наследуйте от него класс EvenNumbers, добавив метод getEvenNumbers(size), 
// которыйвызывает generateNumbers(size) и фильтрует толькочетные числа.
//  Входные: new EvenNumbers().getEvenNumbers(6) → Результат: [2, 4, 6]
//  Входные: new EvenNumbers().getEvenNumbers(10) → Результат: [2, 4, 6, 8, 10]
//  Входные: new EvenNumbers().getEvenNumbers(3) → Результат: [2]


class NumberGenerator{
    generateNumbers(size){
        const arr = [];
        for (let i = 1; i <= size; i++) {
            arr.push(i);
        
        }
        return arr;
        
    }
}

class EvenNumbers extends NumberGenerator{
    getEvenNumbers(size){
        const result = this.generateNumbers(size).filter(function(el){
            if(el%2 == 0) return true
        })
        return result;
    }
}

const numberGenerator = new EvenNumbers();
console.log(numberGenerator.getEvenNumbers(3));
