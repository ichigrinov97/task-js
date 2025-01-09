// 10. На входе строка. Необходимо создать функцию, возвращающую true, если это слово палиндром и 
// false в противном случае

const str = 'течет'.toLowerCase().replaceAll(' ', '')


function palindrom(strTest){
    
    const lastindex = strTest.length -1;
    for (let i = 0; i < strTest.length / 2; i++) {
        if(strTest[i] !== strTest[lastindex - i]){
            return false
        } 
        
    }
    return true
}

console.log(palindrom(str));
