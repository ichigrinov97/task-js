// 13. На вход подается строка, содержащая несколько предложений. Напишите программу, которая
//  подсчитывает количество предложений в строке.
//  Входные: "Hello. How are you? I'm fine!" → Результат: 3
//  Входные: "This is one sentence." → Результат: 1
//  Входные: "What's your name?MynameisJohn."→Результат:2


const a = 'What`s your name? my name is John'

const b = a.split(/[.?]+/)

console.log(b.length);


