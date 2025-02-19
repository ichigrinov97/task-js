// Необходимо отобразить кнопку с надписью «Нажми на меня» и инпутсо 
// значением по-умолчанию «+375(хх)ххх-хх-хх». По клику на кнопку заменить 
// значение инпута на «+375(29)111-11-11»


const btn = document.querySelector('button');
const inpt = document.querySelector('input');


btn.addEventListener('click', function(){
    inpt.value = '+375(29)111-11-11'
})