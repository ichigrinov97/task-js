const btn = document.querySelector('button');

let flag = false;

btn.addEventListener('click', function(){
    if(flag == false){
        btn.style = `background : white`
        flag = true;
    }else{
        btn.style = `background : red`;
        flag = false;
    }
})