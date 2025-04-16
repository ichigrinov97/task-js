// 8. Создайте родительский класс NumberArrayGenerator, который будет генерировать массив чисел
// от 1 до 8 с помощью метода generateArray(). Затем создайте дочерний класс EvenNumberFilter,
// которыйпереопределяетметодgenerateArray() и оставляет в массиветолькочётные числа.
// Входные: new EvenNumberFilter().generateArray() → Результат: [2, 4, 6, 8]



class NumberArrayGenerator{
    generateArray(){
        let arr = []
        for (let i = 1; i <= 8; i++) {
            arr.push(i)
        }
        return arr;
    }
}


class EvenNumberFilter extends NumberArrayGenerator{
    generateArray(){
        const newArr = super.generateArray();
        const res = newArr.filter(el => el%2 === 0);
        return res;
    }

}

const evenNumberFilter = new EvenNumberFilter();

console.log(evenNumberFilter.generateArray());
 