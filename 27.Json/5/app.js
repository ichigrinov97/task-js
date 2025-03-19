// 5. Создать выпадающий список для выбора валюты (например, USD, EUR, GBP). При выборе валюты
//  и клике на кнопку "Показать курс" отправить запрос на API курса валют (например,
//  https://api.exchangerate-api.com/v4/latest/USD). Отобразить курс выбранной валюты к рублю или
//  доллару.



const btn = document.querySelector('.Cours');
const list = document.querySelector('.list');
let flag = false;
const items = document.querySelectorAll('.list div');
const res = document.querySelector('.result');



btn.addEventListener('click', function () {


    if (flag == false) {
        list.style = "display: block"
        flag = true;
    } else {
        list.style = "display: none";
        flag = false;
    }


})

items.forEach(el => {
    el.addEventListener('click', async function (event) {
        console.log(event.target.className);
        res.innerHTML = "";

        const pack = await fetch(`https://api.exchangerate-api.com/v4/latest/${event.target.className}`, {
            method: 'GET'
        })
        const json1 = await pack.json();
        console.log(json1);



        for(let el of Object.entries(json1.rates)){
            const div = document.createElement('div');
            const par = document.createElement('p');
            par.textContent = el[0] + ":" + el[1];
            div.appendChild(par);
            res.appendChild(div);
        }
        
    
    })

})