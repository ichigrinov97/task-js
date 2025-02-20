// По двойному клику на кнопку изменить цвет кнопки


document.querySelector('button').addEventListener('dblclick', function(){
    this.style.background = 'red';
})