const items = [
    { id: 1, category: 'Фрукты', name: 'Яблоко', description: 'Сладкое и сочное яблоко.' },
    { id: 2, category: 'Фрукты', name: 'Банан', description: 'Полезный и питательный банан.' },
    { id: 3, category: 'Овощи', name: 'Морковь', description: 'Свежая и хрустящая морковь.' },
    { id: 4, category: 'Овощи', name: 'Огурец', description: 'Сочный и освежающий огурец.' },
    { id: 5, category: 'Ягоды', name: 'Клубника', description: 'Сладкая и ароматная клубника.' },
    { id: 6, category: 'Ягоды', name: 'Черника', description: 'Полезная и вкусная черника.' }
];

const btns = document.querySelector('.btns');
// const fruit = document.querySelector('.fruit');
// const veg = document.querySelector('.veg');
// const berry = document.querySelector('.berry');
const modal = document.querySelector('.modal');
const close = document.querySelector('.close');
const name1 = document.querySelector('.name');
const discription = document.querySelector('.discription');
const cat = document.querySelector('.cat');
const list = document.querySelector('.list');


function currprod(currevent){
    const newarr = items.filter(el => el.category == currevent ? true : false);
    list.innerHTML = '';
    newarr.forEach(el => {
    list.innerHTML += `<div class = "item">
    <h2 class ="name1">${el.name}</h2>
    <p>${el.category}<p>`
    })
    document.querySelectorAll('.name1').forEach(el =>{
        el.addEventListener('click',function(event){
            modal.style = 'display:block';
            const newfilter = newarr.filter(val => val.name == event.target.textContent);
            name1.textContent = newfilter[0].name;
            discription.textContent = newfilter[0].description;
            cat.textContent = newfilter[0].category;
        })
    })
    
    close.addEventListener('click',function(){
        modal.style = 'display:none';
    })
}

btns.addEventListener('click',function(event){
    currprod(event.target.textContent);
})
// fruit.addEventListener('click', function () {
//     currprod('Фрукты');
// })
// veg.addEventListener('click', function () {
//     currprod('Овощи');
// })
// berry.addEventListener('click', function () {
//     currprod('Ягоды');
// })