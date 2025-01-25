// Напишите функцию, которая принимает строку в виде пароля и проверяет, является ли этот
// пароль надежным. Надежный пароль должен содержать хотя бы одну заглавную букву,
// цифры, а его длина должна быть не менее 8 символов


const password = 'RockeyYUKHH1'.split('');
const bigSymbol = 'qwertyuiopasdfghjklzxcvbnm'.toUpperCase().split('');
const symbol = 'qwertyuiopasdfghjklzxcvbnm'.split('');
const numb = '1234567890'.split('');


const res = () => {
    let input = 'пароль не надежный';
    const haveSimbol = symbol.some(el => password.includes(el) ? true : false);
    const haveBigsimbol = bigSymbol.some(el => password.includes(el) ? true : false);
    const havenumb = numb.some(el => password.includes(el) ? true : false);
    if(haveSimbol == true && haveBigsimbol == true && havenumb == true){
       return input = 'пароль надежный' ;
    }
    return input;
}
const result = res();
console.log(result);
