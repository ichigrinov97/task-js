// 7. Пользователь вводит строку, представляющую число. Необходимо просуммировать все цифры в
//  строке.
//  Входные: "123" → Результат: 6
//  Входные: "111111111111" → Результат: 12


let arr = '123hasfh123'
let summ = 0;

for(let i = 0; i<arr.length; i++){
    if(!isNaN(arr[i])){
        summ += +arr[i]
        
    }

   
    
}

console.log(summ);

