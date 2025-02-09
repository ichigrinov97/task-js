// 4. На вход подается число n– количество элементов массива. Необходимо заполнить массив
// случайными элементами вдиапазоне 0<n<100. Добавить проверки наввод n.

const n = 5;

const arr = [];

function newArr(){
    try {
        for (let i = 0;  arr.length < n ; i++) {
            if(arr){
                arr.push(Math.round(Math.random()*100));
            }
            
        }
        if(arr.length == 0){
            throw new Error('элементы не добавлены')
        }
        return arr;
        
    } catch (error) {
        return error.message;
    }
}
console.log(newArr());
