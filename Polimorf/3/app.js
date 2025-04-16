// 3. *Реализуйте класс CommonPrefix, который будет принимать массив строк. В классе должен быть
// метод findLongestPrefix(), который возвращает самый длинный общий префикс среди всех строк в
// массиве. Если общегопрефиксанет, методвозвращаетпустуюстроку.
// Входные: new CommonPrefix(["flower", "flow", "flight"]) → Результат: "fl"
// Входные: new CommonPrefix(["dog", "racecar", "car"]) → Результат: ""
// Входные: new CommonPrefix(["interview", "interval", "internet"]) → Результат: "inte"


class CommonPrefix{
    constructor(arr){
        this.arr = arr;
    }
    findLongestPrefix(){
        
        
    }
}

const commonPrefix = new CommonPrefix(["interview", "interval", "internet"]);
console.log(commonPrefix.findLongestPrefix());
 