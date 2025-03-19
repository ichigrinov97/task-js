// 1. 
// Д
//  ропдаун
//  с изменением текста
//  Создать выпадающий список colors с несколькими вариантами. При выборе одного из них, текст 
// на странице (<p>) должен изменяться в соответствии с выбранным значением.
 const colors = [
 "red", "blue", "green", "yellow", "orange", "purple", "pink", "brown", "gray", "black", "white",
 "cyan", "magenta", "lime", "indigo", "teal", "violet", "gold", "silver", "beige", "maroon",
 "navy", "olive", "coral", "turquoise", "salmon", "plum", "orchid", "lavender", "peach", "mint",
 "chocolate", "azure", "crimson", "ivory", "khaki", "amber", "emerald", "sapphire", "ruby", "bronze"];


 
 const par = document.querySelector('.main-text')
 const inpt = document.querySelector('input');
 const btn = document.querySelector('button');
 


 colors.forEach(el=>{
    let newp = document.createElement('p');

    newp.innerHTML = `${el} <button class ="delete">Удалить</button>` ;
    document.querySelector('.list-of-colors').appendChild(newp);

    newp.addEventListener('click',function(){
        par.textContent = el;
        document.querySelector('body').style = `background:${el}`
    })
 })

 

 btn.addEventListener('click',function(){
    let newValinpt = document.createElement('p');

    newValinpt.innerHTML = `${inpt.value} <button class ="delete">Удалить</button>`;

    document.querySelector('.list-of-colors').appendChild(newValinpt);

    const n = document.querySelectorAll('.list-of-colors p');
    document.querySelectorAll('.delete').forEach((val, index) =>{
        val.addEventListener('click',function(){
            let parent = document.querySelector('.list-of-colors');
            parent.removeChild(n[index]);
        })
    })
})

const n = document.querySelectorAll('.list-of-colors p');

document.querySelectorAll('.delete').forEach((val, index) =>{
    val.addEventListener('click',function(){
        let parent = document.querySelector('.list-of-colors');
        parent.removeChild(n[index]);
    })
})





