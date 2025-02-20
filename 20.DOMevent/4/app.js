// По наведению на кнопку вывести сообщение «Hi». Когда мышка выходит за 
// границы кнопки сновка скрывать


const text = document.querySelector('h1');

document.querySelector('button').addEventListener('mouseover', function () {
    text.textContent = 'hi'
}) 
document.querySelector('button').addEventListener('mouseout',function(){
    text.textContent = ''
})
