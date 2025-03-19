// 2. Сделать кнопку "Показать случайную цитату". При клике на кнопку отправлять запрос на
//  https://api.quotable.io/random. Отобразить на странице текст цитаты и имя автора.


const btn = document.querySelector('button');
const txt = document.querySelector('.text');


btn.addEventListener('click', async function() {
    const pack = await fetch('https://api.quotable.io/random',{
        method:'GET'
    })
    const json1 = await pack.json();
    console.log(json1);
    
    txt.innerHTML = 'author: ' + json1.author;
    txt.innerHTML += '<br>' + json1.content;
})