// Добавьте картинку на страницу. При наведении на картинку мышкой необходимо ее изменять на другую картинку. Но как только мышка снова отходит в сторону, то возвращается первая картинка



const image = document.querySelector('img');

image.addEventListener('mouseover',function(){
    image.src = './Group 53.png';
})
image.addEventListener('mouseout', function(){
    image.src = './Group 1.png';
})