// 2. Отобразите в строке через пробел четные числа от 5 до 0 по убыванию используя рекурсию
//  Входные: 5 → Результат: 4 2 0

let str = '';
let i = 5;

function newstr (){
    if(i === -1){
        return i;
    }
    if(i%2 === 0 && i <= 5 && i >= 0){
        str += i + ' ';
    }
    
    i--
    newstr()
}
newstr()
console.log(str);
