// 4. Необходимо отобразить кнопку с надписью «Нажми на меня» и пустой инпут. По 
// клику на кнопку вызвать alert и отобразить сообщение из значения инпута. 
// Проверки на ввод. Обработать ошибки



const btn = document.querySelector('button');
const inpt = document.querySelector('input');


btn.addEventListener('click', function(){
        try {
            if(!isNaN(inpt.value)){
                console.log(inpt.value);
            }else{
                throw new Error('ошибка');
            }
            
        } catch (error) {
            console.log(error);
        }
       
})