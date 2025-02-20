// 8. Вывести в строчку все вводимые значения через инпут в виде массива. Добавить 
// проверку, что поле не пустое. После каждого клика очищать значение input. Если 
// вводимое значение не проходит валидацию, то на месте массива вывести 
// сообщение об ошибке красным цветом .


const inpt = document.querySelector('input');
const btn = document.querySelector('button');

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
    inpt.value = '';
})