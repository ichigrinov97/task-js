// 12. Вывести в строчку все вводимые значения через инпут в виде массива. Добавить 
// проверку, что поле не пустое

const btn = document.querySelector('button');
const inpt = document.querySelector('input');
const arr = [];


btn.addEventListener('click', function(){
    try {
        if(inpt.value == ''){
            throw new Error('ошибка');
        }else{
            arr.push(inpt.value);
        }
        console.log(arr);
        
    } catch (error) {
        console.log(error);
        
    }
})