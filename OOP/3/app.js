// 3. Реализуйте класс WordString, который будет иметь следующие методы: метод reverseString, 
// переворачивающий строку, метод upperFirst, возвращающий строку, где первая буква заглавная и 
// метод upperEvery, который делает заглавной первую букву каждого слова этой строки.


class WordString{
    constructor(str){
        this.str = str;
    }

    reverseString(){
        console.log(`${this.str}`.split('').reverse().join(''));  
    }
    upperFirst(){
        console.log(`${this.str[0]}`.toUpperCase() + `${this.str}`.slice(1));
    }
    upperEvery(){
        console.log(`${this.str}`.toUpperCase());
    }
}

const wordstr = new WordString('hello');

wordstr.reverseString()
wordstr.upperFirst()
wordstr.upperEvery()