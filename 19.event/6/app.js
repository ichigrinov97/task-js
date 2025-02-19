// 6. Необходимо отобразить кнопку и инпут со значением по умолчанию. По клику на 
// кнопку заменить значение инпута



const btn = document.querySelector('button');
const inpt = document.querySelector('input');
let flag = false;

btn.addEventListener('click',function(){
    if(flag == false){
        inpt.value = '!!!';
        flag = true;
    }else{
        inpt.value = '???'
        flag = false
    }
    
})