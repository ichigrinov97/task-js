// 11. По нажатию на кнопку поменять местами значения 2 инпутов.

const btn = document.querySelector('button');
const inpt1 = document.getElementById('val1');
const inpt2 = document.getElementById('val2');
let flag = false;


btn.addEventListener('click', function () {
    let n1 = inpt1.value;
    let n2 = inpt2.value;
    if (flag == false) {
        inpt1.value = n2;
        inpt2.value = n1;
        flag = true;
    }else{
        inpt1.value = n2;
        inpt2.value = n1;
    }
})