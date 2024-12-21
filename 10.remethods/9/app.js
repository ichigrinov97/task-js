// 9. На входе n– количество элементов массива, затем пользователь заполняет массив с клавиатуры.
//  Создать новый массив, содержащий только те строки, которые начинаются с символов a или h.
//  Проверитьвводтолькотекстовыхзначений.Использоватьметод filter.
//  Входные: ["ann", "school", "hschool", "borabora"] → Результат: ["ann", "hschool"]
//  Входные: ["apple", "banana", "harvest", "grape"] → Результат: ["apple", "harvest"]
//  Входные: ["home", "anchor", "boat"] → Результат: ["home", "anchor"]



const arr = ["apple", "banana", "harvest", "grape"];


const result = arr.filter(function(el){
    if(el[0] == 'a' || el[0]== 'h'){
        return el;
    }
})
console.log(result);



