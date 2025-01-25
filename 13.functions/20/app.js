//  2. Написать функцию,которая принимает строку и возвращает ее в обратном порядке.
//  Входные: reverseString('hello') → Результат: 'olleh'

const str = 'hello'

const reverse = (newStr) => newStr.split('').reverse().join('');
const result = reverse(str)
console.log(result);
