// 6. Реализуйте функцию, которая принимает массив чисел и возвращает индекс наибольшего
//  числа. Если таких чисел несколько, вернуть индекс первого найденного.
//  Добавить проверки наввод
//  [1, 3, 7, 7, 5]-> 2

const arr = [1, 3, 7, 8, 5];
let max = -Infinity;

function maxInArr(){
    try {
        for (let i = 0; i < arr.length; i++) {
            if(typeof arr[i] !== 'number'){
                throw new Error('один из элементов не число');
            }
            if(arr[i]> max){
                max = arr[i];
            }
        }
        return arr.indexOf(max);
    
    } catch (error) {
        return error.message;
    }
}
console.log(maxInArr());
