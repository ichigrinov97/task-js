// Напишите функцию, генерирующую пароль из 8 символов с использованием замыкния.
//  (Math.random)

let symb = 'qwertyuiopasdfghjklzxcvbnm';

function password (){
    let defaultPass = '';
    return function (){
        defaultPass += symb[Math.round(Math.random()* symb.length)];
        console.log(defaultPass);
        
    }
}
const result = password();
for (let i = 0; i < 8; i++) {
    result();  
}
