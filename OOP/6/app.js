// 6. Реализуйте класс, который находит полное число метров по заданному числу сантиметров.
// Добавьте проверкуна вводтолькочисел.
// Входные: 345 →Результат: 3 метров
// Входные: 100 → Результат: 1 метр
// Входные: 99 →Результат: 0 метров
// Входные: 750 →Результат: 7 метров
// Входные: 10 → Результат: 0 метров
// Входные: hi → Результат: Выввели не число!

class Convert{

    constructor(a){
        this.a = a;
    }

    metr(){
        if(isNaN(this.a)){
            console.log('вы ввели не число'); 
        }else{
            console.log(Math.floor(this.a / 100));
            
        }
    }
}

const res = new Convert('hi')
res.metr();
