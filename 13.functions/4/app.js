// 4. Напишите функцию, которая принимает статичный массив строк. Необходимо отфильтровать 
// значения и оставить только те, где длина строк до 2 символов.
//  [“by”, “belarus”, “de”, “ru”, “germany”] -> [“by”, “de”, “ru”]


function onlyTwoEl(a) {
    const b = [];
    for (let i = 0; i < arr.length; i++) {
        if(arr[i].length <= 2){
            b.push(arr[i])
        }else{
            continue
        }
        
    }
    
    return b
}

const arr = ['by', 'belarus', 'de', 'ru', 'germany'];
const res = onlyTwoEl(arr)
console.log(res);
