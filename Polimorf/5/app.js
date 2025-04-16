// 5. Создайте родительский класс Number, который будет хранить число. Затем создайте дочерний
// класс PalindromeChecker, который будет проверять, является ли это числопалиндромом.
// Входные: new PalindromeChecker(-121) → Результат: false
// Входные: new PalindromeChecker(10) → Результат: false
// Входные: new PalindromeChecker(12321) → Результат: true


class Number {
    constructor(numb) {
        this.numb = numb;
    }
}


class PalindromeChecker extends Number {
    constructor(numb) {
        super(numb)
    }

    isPalindrom() {
        if(this.numb.toString() === this.numb.toString().split('').reverse().join('')){
            console.log(true);
            
        }else{
            console.log(false);
            
        }
    }
}

const palindromeChecker = new PalindromeChecker(-121);
palindromeChecker.isPalindrom()