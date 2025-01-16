// На входе массив. Реализуйте 2 функции. Первая для проверки, что в массиве только строки. 
// Вторая для получения суммы всех строчных элементов массива. Если результат функции 
// проверки –true, то вызывать новую функцию, возвращающую конкатенацию всех строчных 
// элементов массива


const arr = ['Hello', 'my', 'name', 'Ivan']

function onlyStr(arrTest){
    const str = arrTest.every(function(el){
        if(isNaN(el)){
            return true
        }else{
            return false
        }
    })
    return str
}

const res = onlyStr(arr)
// console.log(res);

let newStr = ''
function sumStr(sum){
    if (res == true) {
        for (let i = 0; i < sum.length; i++) {
            newStr += `${sum[i] + ' '}`
            
        }
        
    }else {
        return false
    }

    return newStr
}
const result = sumStr(arr)
console.log(result);

