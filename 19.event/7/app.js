// Записать в результат удвоенное значение инпута. Добавить проверки 


const btn = document.querySelector('button');
const inpt = document.querySelector('input');


btn.addEventListener('click',function(){
    try {
        if(isNaN(inpt.value)){
            throw new Error('ошибка')
        }else{
            console.log(inpt.value * 2);
            
        }
    } catch (error) {
        console.log(error);
        
    }
})