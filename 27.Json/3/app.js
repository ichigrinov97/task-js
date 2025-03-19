// 3. Сделать две кнопки: "Факт о коте" и "Факт о собаке". При клике на любую из кнопок отправлять
// запрос на https://catfact.ninja/fact (для котов) или https://dog-api.kinduff.com/api/facts (для собак).
// Отобразитьфакт на странице.


const catBut = document.querySelector('.cat');
const dogBut = document.querySelector('.dog');
const fckt = document.querySelector('.fckt');

catBut.addEventListener('click', async function(){
    const packCat = await fetch('https://catfact.ninja/fact',{
        method:'GET'
    })
    const jsonCat = await packCat.json();
    console.log(jsonCat);
    

    fckt.innerHTML = jsonCat.fact
})
dogBut.addEventListener('click', async function(){
    const packDog = await fetch('https://dog-api.kinduff.com/api/facts',{
        method:'GET'
    })
    const jsonDog = await packDog.json();
    console.log(jsonDog);
    
    fckt.innerHTML = jsonDog.fact
})