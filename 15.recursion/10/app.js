// 10. На входе строка s. Проверьте, является ли строка палиндромом (читается одинаково в обе 
//     стороны), используя рекурсию.
//      Входные: "madam" → Результат: True
//      Входные: "hello" → Результат: False
//      Входные: "racecar" → Результат: True


const newstr = ''

function bool (str){
    if(str.length === 0){
        return true;
    }
    if(str[0]!== str[str.length - 1]){
        return false
    }
    
    
    return bool(str.slice(1,str.length - 1));
}
const result = bool('madam');
console.log(result);
