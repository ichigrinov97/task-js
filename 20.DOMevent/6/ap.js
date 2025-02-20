// Создайте форму для регистрации с полями ввода имени, email и пароля. 
// Реализуйте валидацию полей и отображение сообщений об ошибках при 
// некорректном вводе.


const btn = document.querySelector('button');
const name = document.querySelector('.name');
const pass = document.querySelector('.password');
const mail = document.querySelector('.mail');


btn.addEventListener('click',function(){
    try {
        if(name.value == '' || !isNaN(name.value)){
            throw new Error('ошибка')
        }
        if(!/^[\w]+@+[a-z]+\.[a-z]{2,6}$/gm.test(mail.value)){
            throw new Error('ошибка')
        }
        if(pass.value.length < 8 ){
            throw new Error('ошибка')
        }
        console.log(name.value,pass.value, mail.value);
        
    } catch (error) {
        console.log(error);
        
    }
})
