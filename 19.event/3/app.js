// Необходимо отобразить кнопку с надписью «Нажми на меня» и пустой инпут. По 
// клику на кнопку вызвать alert и отобразить сообщение из значения инпута


const btn = document.querySelector('button');
const inpt = document.querySelector('input');


btn.addEventListener('click',function(){
    console.log(inpt.value);
    
})