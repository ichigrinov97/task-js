// 4. Реализуйте класс MathСalculation. В него передается число n – количество элементов массива. На 
// основании числа формируется динамический массив из n элементов внутри класса. Создать 
// функцию для подсчета всех четных чисел массива. Добавить проверки на ввод


class MathСalculation{
    constructor (n){
        this.n = n;
    }

    arrayRandom(){
        const arr = [];
        for (let i = 0; i < this.n; i++) {
            if(arr.length < this.n){
                arr.push(Math.round(Math.random()* 30));
            }
        }
        console.log(arr);
        let val = 0
        for (let i = 0; i < arr.length; i++) {
            if(arr.length == 0){
                console.log(i);
            }
            if(arr.length > 0 && arr[i] % 2 ==0){
                val += 1
            }
            
        }
        console.log(val);
        
    }
    
}

const result = new MathСalculation(10);
result.arrayRandom();