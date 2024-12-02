// На вход подается строка. Определите, является ли строка хорошей. Строка считается хорошей,
//  если в ней присутствует подстрока «хорош» в любом регистре


const a = prompt();
const c = 'хорош';
const b = a.includes(c);
const d = c.toUpperCase();
const e = a.includes(d);
if(b || e){
    console.log(true);
    
}else{
    console.log(false);
    
}