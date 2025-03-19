// 2. Создайте класс BankAccount, в котором конструктор принимает начальный баланс. Реализуйте 
// методы deposit(amount) (увеличивает баланс), withdraw(amount) (уменьшает, если достаточно 
// средств), и getBalance() (возвращает текущий баланс).
//  const acc = new BankAccount(100);
//  acc.deposit(50);
//  acc.withdraw(30);
//  console.log(acc.getBalance()); // 120


class BankAccount{
    balance;

    constructor(balance){
        this.balance = balance;
    }
    deposit(amount){
        return this.balance += amount;
    }
    
    withdraw(amount){
        if(this.balance !== 0){
            return this.balance -= amount;
        }
    }
    getBalance(){
        return this.balance;
    }
}
const acc = new BankAccount(100);
acc.deposit(50);
acc.withdraw(30);
console.log(acc.getBalance());
