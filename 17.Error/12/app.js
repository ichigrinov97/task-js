// 12. На вход подается строка в виде электронной почты пользователя. Необходимо найти в 
// данной почте “@”. Если же есть, то вывести булевое true, в противном случае бросить 
// исключение и его обработать


const str = 'ivanc@gmail.com';

function searchMail(){
    try {
        if(/@/gm.test(str)){
            return true
        }else{
            throw new Error('символ @ не найден');
        }
        
    } catch (error) {
        return error.message;
    }
}
console.log(searchMail());
