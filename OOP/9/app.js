// 9. Реализуйте класс для пересчета временного интервала, заданного в минутах, в величину,
//  выраженнуювчасахиминутах.
//  Входные: 150 минут →Результат: 2 часа 30 минут
//  Входные: 240 минут→Результат:4 часа 0минут

class Time{
    
    convert(min){
        let hour = Math.trunc(min/60);
        let minutes = min % 60;
        return `${hour} часа ${minutes} минут`
    }
}

const time = new Time();
console.log(time.convert(60));
