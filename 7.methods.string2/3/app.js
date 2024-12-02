// 3. На вход подается строка, содержащая символы @. Удалите все вхождения символа @ из строки.
//  Включитепроверку,чтобыубедиться,что вводкорректен.
//  Входные: "123@1@@34" →Результат: "123134"
//  Входные: "email@domain.com" → Результат: "emaildomain.com"


const a = '123@1@@34'.replaceAll('@', '');

// if(a.length){
//     console.log(a);
    

// }else{
//     console.log(false);
    
// }

a.length ? console.log(a): console.log(false);

