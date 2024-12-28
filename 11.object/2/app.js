// 2. Навходе объект.Необходимо вывести все ключи
// , которые являются числами.
// Входные: {"1": "a", "2": "b", "name": "c"} → Результат: ["1", "2"]

const obj = {
    '1':'a' ,
    '2':'b' ,
    'name': 'c'
}
const arr =[]

for(let key in obj){
    if(!isNaN(key)){
        arr.push(key)
        
        
    }
}console.log(arr);
