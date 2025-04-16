// 2. Реализовать класс PasswordValidator с методом isStrong(password), который проверяет, 
// содержит ли пароль минимум 8 символов, хотя бы одну заглавную букву, цифру и 
// специальный символ. Получать данные из input по клику на кнопку
//  const validator = new PasswordValidator();
//  validator.isStrong("Abc!1234") // true
//  validator.isStrong("password") // false -> "Пароль слабый";
//  validator.isStrong("Short1!") // false -> "Пароль короче 8 символов"


class PasswordValidator{
    inpt = document.querySelector('input')
    btn = document.querySelector('button')

    isStrong(password){
        this.btn.addEventListener('click',()=>{
            if(/[A-Z]+/gm.test(this.inpt.value)&& /[a-z]+/gm.test(this.inpt.value) && /[\d]+/gm.test(this.inpt.value) && /[!,#^&*]+/gm.test(this.inpt.value) && this.inpt.value.length >= 8){
                console.log(true);
            }else{
                console.log('Пароль не надежный');
                 
            }
        })

    }
}

const passwordValidator = new PasswordValidator();
passwordValidator.isStrong();