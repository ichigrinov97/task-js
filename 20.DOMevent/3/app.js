// 3. Создайте блок текста с кнопкой "Показать/Скрыть". При клике на кнопку текст
//  должен показываться или скрываться.



let flag = false;

document.querySelector('button').addEventListener('click',function() {
    const par = document.querySelector('p');
    if(flag == false){
        par.style.display =  'none';
        flag = true;
    }else{
        par.style.display = 'block';
        flag = false;  
    }
})