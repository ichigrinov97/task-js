// 4. Сделать кнопку "Новая загадка". При клике отправить запрос на https://official-joke-api.appspot.com/random_joke Отобразить на странице текст: часть "setup" и "punchline".


const btn = document.querySelector('button');
const jke = document.querySelector('div');


btn.addEventListener('click', async function() {
    const pack = await fetch('https://official-joke-api.appspot.com/random_joke' , {
        method:'GET'
    })

    const json1 = await pack.json();

    jke.innerHTML ='setup: ' + json1.setup;
    jke.innerHTML +='<br>punchline: ' + json1.punchline;
})