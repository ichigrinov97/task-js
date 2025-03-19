// 1.
//  Создать кнопку "Загрузить пользователей". При клике на кнопку — отправить запрос на
//  https://jsonplaceholder.typicode.com/users. Отобразить полученные данные в виде карточек, каждая
//  изкоторыхбудетсодержать:имя(name), email (email), город (address.city).




const btn = document.querySelector('button');
const inf = document.querySelector('.info');

btn.addEventListener('click', async function(){
    const pack = await fetch('https://jsonplaceholder.typicode.com/users',{
        method: 'GET'
    })

    const json1 = await pack.json();
    console.log(json1);

    for (let i = 0; i < json1.length; i++) {
        
        inf.innerHTML +='<br>name:' + json1[i].name
        inf.innerHTML +='<br>email:' + json1[i].email
        inf.innerHTML +='<br>address:' + json1[i].address.city
        inf.innerHTML += '<hr>'

    }
    
})