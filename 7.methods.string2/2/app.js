// Проверка слова на палиндром. Если слово читается одинаково с обеих сторон, выведите true,
//  иначе false.
//  Входные: "мем"→ Результат: true
//  Входные: "тест" → Результат: false

const a = 'мем';
const b = a.split('').reverse().join('');

if(a == b){
    console.log(true);

    
}else{
    console.log(false);
    
}