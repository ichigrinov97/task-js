// 10. Вы вводите строку. Проверить является ли это слово палиндром. Добавить 
// проверки


const inpt = document.querySelector('input');
const btn = document.querySelector('button');
const par = document.querySelector('p');


btn.addEventListener('click', function () {
    const str = inpt.value;
    const strrev = inpt.value.split('').reverse().join('');
    try {
        if (inpt.value == '') {
            throw new Error('ошибка');
        }
        if(str == strrev){
            par.textContent = 'Это является полиндром'
        }else{
            par.textContent = 'это не явдяется полиндром'
        }

    } catch (error) {
        console.log(error);

    }
})