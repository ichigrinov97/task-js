// 10. После нажатия на кнопку «Разблокировать» мы можем вносить изменения в 
// инпут. После нажатия на заблокировать данное действие запрещается, тем самым 
// выключая возможность редактирования значения инпута


const btnLock = document.getElementById('Lock');
const btnUnLock = document.getElementById('Unlock');
const inpt = document.querySelector('input');


btnLock.addEventListener('click',function(){
    inpt.disabled = false;
})
btnUnLock.addEventListener('click',function(){
    inpt.disabled = true;
})