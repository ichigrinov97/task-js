// Пользователь вводит слово. Преобразуйте его в хештег. Проверка: строка должна состоять только
// изтекста.
// Входные: "hSСhOol"→ Результат: '#hschool'
// Входные: "JavaScript" → Результат: '#javascript


const a = 'hSchOol'.toLowerCase();


if(isNaN(a)){
    console.log('#' + a);
}else{
    console.log('это не текст');
    
}

