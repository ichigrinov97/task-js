// 7. На входе объект.Необходимо проверить,пустой ли объект.Если объект пустой,вернуть false,если
// содержит хотя бы одну пару(ключ:значение),вернуть true.
// Входные:{}→Результат:false
// Входные:{"a":1}→Результат:true

const obj = {
    "a":1
}
let val = 0
for(let key in obj){
    if(key){
        val++
    }
}

if(val == 0){
    console.log(false);
    
}else{
    console.log(true);
    
}

