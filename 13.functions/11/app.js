// На входе массив. Реализуйте 2 функции. Первая для проверки, что в массиве только числа. Вторая 
// для получения массива с удвоенными значенями каждого элемента. Если результат функции 
// проверки –true, то вызывать новую функцию, возвращающую массив с удвоенными элементами


const arr = [1, 2, 3, 24]


function onlyN(arrTest){
    const bool = arrTest.every(function(el){
        if(!isNaN(el)){
            return true
        }else{
            return false
        }
    })

    return bool
}

const res = onlyN(arr)
console.log(res);

let a = [];
function multArr(mult){
    if(res == true){
        for (let i = 0; i < mult.length; i++) {
            a.push(mult[i] * 2)
            
        }
    }
    
    
    return a
}
const fin = multArr(arr)
console.log(fin);

