// *Дана таблица c 1 колонкой. Под таблицей 
// сделайте форму (инпут и кнопка), с помощью 
// которой можно будет добавить нового 
// значение в таблицу. 


const inpt = document.querySelector('.inp');
const btn = document.querySelector('.btn');


btn.addEventListener('click',function(){
    document.querySelector('tbody').innerHTML += `<tr> ${inpt.value} </tr>`
    inpt.value = '';
})