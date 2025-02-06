// На вход подается строка из 2 и более слов. Необходимо все символы пробела
// заменить на пустую строку. 


const str = 'hello it is me';

function replace (){
    return str.replaceAll(/ /gm,'');
}
console.log(replace());
