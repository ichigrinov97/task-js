// 1.
// Реализовать метод factorial(n), который вычисляет факториал числа. Получать данные из 
// input по клику на кнопку
// const fact = new FactorialCalculator();
// fact.factorial(5) // 120
// fact.factorial(0) // 1
// fact.factorial(-3) // Факториал отрицательного числа не определён

class FactorialCalculator{
    result = 1 ;
    factorial(n){
        if(n >= 0){
            for (let i = 1; i <= n; i++) {
                this.result *= i;
            }
            return this.result;
        }else{
            return 'факториал не определен';   
        }
    }
}

const factorialcalc = new FactorialCalculator();
console.log( factorialcalc.factorial(0));

