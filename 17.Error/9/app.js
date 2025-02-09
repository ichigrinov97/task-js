// 9. На вход подается массив чисел. Вернуть массив, в котором все отрицательные числа
// заменены на 0.Добавить проверку наввод(всеэлементы массива должны  быть числами).
// [-1, 2,-3, 4]-> [0, 2, 0, 4]


const arr = [-1, 2,-3, 4];
const arr2 = [];

function onlyPositive(){
    try {
        for (let i = 0; i < arr.length; i++) {
            if(isNaN(arr[i])){
                throw new Error('элемент не является числом');
            }
            if(arr[i] < 0){
                arr2.push(0);
            }else{
                arr2.push(arr[i]);
            }
            
        }
        return arr2;
    } catch (error) {
        return error.message
    }
}
console.log(onlyPositive());
