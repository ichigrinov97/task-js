// 7. Создайте форму с выпадающим списком для выбора единицы измерения 
// (например, дюймы, сантиметры, метры). При выборе единицы измерения 
// отображайте соответствующее значение в консоли.



const btn = document.querySelector('button');
let flag = false;
const spis = document.querySelector('div');

btn.addEventListener('click',function(){
    if(flag == false){
        spis.style.display = 'none';
        flag = true;
    }else{
        spis.style.display = 'block';
        flag = false;
    }
})

const par = document.querySelector('.result')
spis.addEventListener('click', function(event){
    btn.textContent = event.target.textContent
    spis.style.display = 'none'
    flag = true;
})