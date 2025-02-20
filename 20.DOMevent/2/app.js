// 2. Создайте несколько элементов (например, кнопок) на странице. При клике на
//  элемент, используйте event.target для определения на какой из элементов
//  производилось действие и изменитецвет.


document.querySelector('div').addEventListener('click',function(event){
    const btn = document.querySelector('button');
    event.target.style.background = 'red'
})