// 8. Реализуйте класс Validator. У него будет метод isEmail параметром принимает строку и проверяет, 
// является ли она корректным емейлом или нет. Если является - возвращает true, если не является 
// то false.


class Validator{
    isEmail(str){
        return /^[a-zA-Z][\w\.\-]+@[a-z]{2,10}\.[a-z]{2,6}$/gm.test(str);
    }
}
const validator = new Validator();
console.log(validator.isEmail('chigrinov1998@mail.ru'));
