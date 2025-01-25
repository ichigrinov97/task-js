// Напишите функцию, которая принимает массив строк и находит строку с максимальной
// длиной. Добавить проверки

const arr = ['adc' , 'arrrr', 'aq'];

const res = (arrTest) =>{
    let min = 0
    let str = ''
    for (let i = 0; i < arr.length; i++) {
       if(arr[i].length > min){
        min = arr[i].length
       }
       if(arr[i].length == min){
        str = arr[i]
       }
        
    }
    
    return str
}
const result = res(arr);
console.log(result);

