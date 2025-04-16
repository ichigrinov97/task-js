// 10. Создайте родительский классNumberProcessor, которыйбудет содержать массивчисел [1,-1,-4, 3, 3,
//     5, 4, 4, 2, 2, 2] и метод processNumbers(), который оставляет в массиве только положительные числа.
//     Затем создайте дочерний класс UniqueNumberProcessor, который переопределяет метод
//     processNumbers() и удаляет дубликаты измассива.
//     Входные: new NumberProcessor().processNumbers() → Результат: [1, 2, 3, 4, 5]


class NumberProcessor {
    constructor(arr) {
        this.arr = arr;
    }
    processNumbers() {
        const newarr = this.arr.filter(function (el) {
            if (el > 0) {
                return true
            }
        })
        return newarr;
    }
}
class UniqueNumberProcessor extends NumberProcessor {
    constructor(arr) {
        super(arr);
    }
    processNumbers() {
        const father = super.processNumbers();
        let result = [];
        for (let i = 0; i < father.length; i++) {
            if (!result.includes(father[i])) {
                result.push(father[i])
            }

        }
        return result.sort();
    }
}

const uniqueNumberProcessor = new UniqueNumberProcessor([1, -1, -4, 3, 3, 5, 4, 4, 2, 2, 2]);
console.log(uniqueNumberProcessor.processNumbers());
