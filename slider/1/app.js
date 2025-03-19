// Разработать интерактивное меню, в котором при нажатии на кнопку соответствующей вкладки
//  будут отображаться только определенные элементы из массива данных.
//  Функциональные требования
//  1.
//  Менюсвкладками:
//  • Должен быть набор кнопок (вкладки), каждая из которых отвечает за отображение
//  определенной категории данных.
//  2. Отображениеданных:
//  • Долженбыть div, внутри которого будут динамически меняться отображаемые элементы
//  из массива.
//  3. Фильтрацияданных:
//  • При нажатии на вкладку должны отображаться только элементы массива,
//  соответствующие выбранной категории.
const items = [
    { id: 1, category: 'Фрукты', name: 'Яблоко', description: 'Сладкое и сочное яблоко.' },
    { id: 2, category: 'Фрукты', name: 'Банан', description: 'Полезный и питательный банан.' },
    { id: 3, category: 'Овощи', name: 'Морковь', description: 'Свежая и хрустящая морковь.' },
    { id: 4, category: 'Овощи', name: 'Огурец', description: 'Сочный и освежающий огурец.' },
    { id: 5, category: 'Ягоды', name: 'Клубника', description: 'Сладкая и ароматная клубника.' },
    { id: 6, category: 'Ягоды', name: 'Черника', description: 'Полезная и вкусная черника.' }
];

const fruit = document.querySelector('.fruits');
const veg = document.querySelector('.veg');
const berry = document.querySelector('.berry');
const list = document.querySelector('.list');
const modal = document.querySelector('.modal');
const close = document.querySelector('.close');
const name1 = document.querySelector('.name');
const discription1 = document.querySelector('.discription');
const cat1 = document.querySelector('.cat');
document.querySelectorAll('.item').forEach(el => {
    el.addEventListener('click', () => modal.style = 'display:block');
});

const currproduct = function (currcat) {
    const newarr = items.filter(el => el.category == currcat ? true : false);
    list.innerHTML = '';
    newarr.forEach(el => {
        list.innerHTML += `<div class = 'item'> 
        <h2>${el.name}</h2> 
        <p>${el.category}</p> 
        </div>`;

    })
    document.querySelectorAll('.item').forEach(el => {
        el.addEventListener('click', function () {
            modal.style = 'display:block';
            const newarr = items.filter(value => value.name == el.children[0].textContent ? true : false);
            name1.textContent = newarr[0].name;
            discription1.textContent = newarr[0].description;
            cat1.textContent = newarr[0].category;
        })

    });
    close.addEventListener('click',() => modal.style = 'display:none');
}


fruit.addEventListener('click', function () {
    currproduct('Фрукты');

});

veg.addEventListener('click', function () {
    currproduct('Овощи');

})
berry.addEventListener('click', function () {
    currproduct('Ягоды');
})