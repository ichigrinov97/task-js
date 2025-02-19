// .
//  Напишите функцию classifyNumbers, которая принимает массив чисел и возвращает объект 
// с тремя свойствами: positive, negative, и zero. Каждое свойство должно содержать количество 
// положительных, отрицательных и нулевых элементов в массиве соответственно.
//  console.log(classifyNumbers([1, -2, 0, 3, -4, 0])); // { positive: 2, negative: 2, zero: 2 } 
// console.log(classifyNumbers([0, 0, 0, 0])); // { positive: 0, negative: 0, zero: 4 } 

const arr = [0, 0, 0, 0];
const obj = {positive : 0, negative : 0, zero: 0};


function arrToObj(){
    for (let i = 0; i < arr.length; i++) {
        if(arr[i]>0){
            obj.positive += 1;
        }
        if(arr[i]< 0){
            obj.negative += 1;
        }
        if(arr[i]==0){
            obj.zero += 1;
        }
        
    }
    return obj;
}
console.log(arrToObj());
