// 2. Реализуйте класс Calculator, который будет хранить в себе 4 метода: сумма чисел, разность, 
// произведение, частное. 2 числа передаются в класс, далее вызываеются соответствующие функции. 
// Добавить проверки на ввод


class Calculator{

    constructor(a,b){
        this.a = a;
        this.b = b;
    }

    doSum(){
        console.log(this.a + this.b);
        
    }
    doMinus(){
        console.log(this.a - this.b);
        
    }
    doProiz(){
        console.log(this.a * this.b);
        
    }
    doDlen(){
        console.log(this.a / this.b);
        
    }
}

const calc = new Calculator(10,4);

calc.doSum()
calc.doMinus()
calc.doProiz()
calc.doDlen()