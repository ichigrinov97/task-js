// 4. Пользователь вводит строковое значение. Если число больше 2 и меньше 11 или больше/равно 26
// именьше30,выведите"Верно",иначе"Неверно".
// Входные: "5" → Результат: "Верно"
// Входные: "15" → Результат: "Неверно"
// Входные: "28" → Результат: "Верно"


const a = '5';

if(a > 2 && a < 11 || a >= 26 && a < 30){
    console.log(true);
    
}else{
    console.log(false);
    
}