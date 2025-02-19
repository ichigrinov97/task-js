// Необходимо отобразить числовой инпут и кнопку. После нажатия на кнопку 
// необходимо получить значение из инпута. Проверить, что это число > 0. Если 
// проверка true, то вывести в Результат ряд Фибоначчи.
// 3 - > [0, 1, 1]
// 6 - > [0, 1, 1, 2, 3, 5]
// 9 - > [0, 1, 1, 2, 3, 5, 8, 13, 21]


const btn = document.querySelector('button');
const inpt = document.querySelector('input');


btn.addEventListener('click', function(){
    const fib = [];
    if (inpt.value == 1) {
        fib.push(0);
    }
    if(inpt.value == 2){
        fib.push(0,1);
    }
    if(inpt.value > 2){
        fib.push(0,1);
        for (let i = 2; i < inpt.value; i++) {
        fib.push(+fib[i-1] + +fib[i-2]) ;
        }
    }
    
    console.log(fib);
    
})