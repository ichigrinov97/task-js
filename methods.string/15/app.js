// Пользовательвводитдату в формате'х-х-х'. Замените все дефисы на !


const a = prompt();

// console.log(a.replaceAll('-', '!'));


console.log(a.split('-').join('!'));
