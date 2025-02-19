// У вас есть кнопка. После нажатия поменять background.

const btn =document.querySelector('button');

const colors = [
    "#FF5733", "#33FF57", "#3357FF", "#FF33A1", "#33FFF5",
    "#F5FF33", "#A133FF", "#FF3333", "#33FFA1", "#5733FF",
    "#33FF33", "#FF8333", "#3383FF", "#FF33F5", "#33FF83",
    "#8333FF", "#FF3383", "#33F5FF", "#FF5733", "#33FF57"
];


btn.addEventListener('click', function(){
    btn.style =`background-color: ${colors[Math.round(Math.random()*colors.length)]}`
})