// 9. Пользователь вводит строку, состоящую из слов (до 3 слов), разделенных пробелами.
//  Преобразуйтекаждоесловотак, чтобыпервая буквабыластрочной,аостальные—заглавными.
//  Входные: "HELLO WORLD" → Результат:"hELLO wORLD"
//  Входные: "JavaScript LANGUAGE" → Результат: "jAVA sCRIPT lANGUAGE"
//  Входные: "CODING is FUN" → Результат:"cODING iS fUN"


const a = 'HELLO WORLD';
const b = a.split(' ');



console.log((b[0][0].toLowerCase() + b[0].slice(1) + ' ' + b[1][0].toLowerCase() + b[1].slice(1)));
