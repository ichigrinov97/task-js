// 5. На вход подается строка, представляющая электронную почту. Если строка содержит символ @ и
//  заканчивается на .com или.ru, выведите true, иначе false.
//  Входные: "user@domain.com" → Результат: true
//  Входные: "hello@world.ru" → Результат: true
//  Входные: "example@gmail" → Результат: false


const a = '.ru';

if(a.includes('@') && (a.endsWith('.com') || a.endsWith('.ru')) ){
    console.log(true);
    
}else{
    console.log(false);
    
}