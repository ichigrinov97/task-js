// 11.
// *Создайте класс PascalsTriangle, который будет принимать количество строк
// numRows и содержать метод generateTriangle(), возвращающий первые
// numRowsстроктреугольникаПаскаля.
// Входные: new PascalsTriangle(5).generateTriangle() → Результат: [[1], [1, 1], [1, 2, 1], [1, 3, 3, 1], 
// [1, 4, 6, 4, 1]] 
// Входные: new PascalsTriangle(1).generateTriangle() → Результат: [[1]]


class PascalsTriangle{
    constructor(numrows){
        this.numrows = numrows;
    }

    generateTriangle(){
        let result = [];
        for (let i = 0; i < this.numrows ; i++) {
            let str = [1];
            for (let j = 1; j <= i; j++) {
                str.push(j+i-1)
                
            }
            result.push(str)
            
        }
        return result;
    }
}

const pascaltriangle = new PascalsTriangle(5);
console.log(pascaltriangle.generateTriangle());
