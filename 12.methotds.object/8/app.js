// 8. На вход подается число. Необходимо каждое значение возвести в степень индекса и
//  вычислить сумму. 12345 = 1**0+2**1+3**2+4**3+5**4
//1+2+9+64+625
const num = '12345';

const arr = num.split('');
console.log(arr);
let res = 0;
for (let i = 0; i < arr.length; i++) {
    res += (arr[i]**i);
    
    
}
console.log(res);

