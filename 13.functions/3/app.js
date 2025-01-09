// 3. Напишите функцию, которая принимает строку в маленьком регистре и возаращает строку, где 
// каждое слово начинается с большого регистра
//  hschool company -> Hschool Company 




function doStr(a) {
    const arr = a.split(' ')
    const b = []
    for (let i = 0; i < arr.length; i++) {
        if(arr[i]== arr[i].toLowerCase()){
            b.push(arr[i][0].toUpperCase() + arr[i].slice(1))
        }else{
            b.push(arr[i][0].toUpperCase()+ arr[i].slice(1).toLowerCase())
        }
        
    }
    return b.join(' ')
}

const str = 'hschool company';
const result = doStr(str)
console.log(result);







