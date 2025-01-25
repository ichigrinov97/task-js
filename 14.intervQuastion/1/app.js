// Создайте объект calculator с полем result и методами add и subtract, которые принимают в
// качестве параметров число и изменяют result соответственно. В задаче использовать
// контекст


const calculator = {
    result : 0,
    add : function (num1){
        this.result += num1
        console.log(this.result);
        
    },
    subtract : function (num2){
        this.result -= num2
        console.log(this.result);
        
    }
}

calculator.add(5);
calculator.subtract(8);

