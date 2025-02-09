// 10. На вход подается массив чисел. Найти количество уникальных элементов в массиве.
// Добавить проверку наввод (всеэлементы должныбыть числами).
// [1, 2, 2, 3, 4, 4, 5]-> 5
// (уникальные элементы: 1, 2, 3, 4, 5)


const arr1 = [1, 2, 2, 3, 4, 4, 5];
const arr2 = [];

function uniqEl(){
    try {
        for (let i = 0; i < arr1.length; i++) {
            if(isNaN(arr1[i])){
                throw new Error('элемент не является числом');
            }
            if(!arr2.includes(arr1[i])){
                arr2.push(arr1[i])
            }
            
        }
        return arr2.length;
    } catch (error) {
        return error.message;
    }
}
console.log(uniqEl());
