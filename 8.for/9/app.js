// 9. Пользовательвводитчисло.Выведитевсечислаот1довведенногочисла,которыекратны 3.
// Входные: 10 →Результат: 3, 6, 9
// Входные: 15 → Результат: 3, 6, 9, 12, 15

let num = +'10';


for(let i = 0; i< num; i++){
    if(i % 3 == 0){
        console.log(i);
        
    }
}

