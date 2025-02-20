document.querySelector('body').addEventListener('click', function(event){
    const par = document.querySelector('p');
    par.textContent = event.target.textContent; 
})