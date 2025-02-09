// *Реализуйте функцию, которая принимает массив последовательных (возрастающих) букв и 
// возвращает отсутствующую в массиве. Добавить проверки на элементы массива
//  ["a","b","c","d","f"] -> "e" 
// ["O","Q","R","S"] -> "P "


const arr = ["O","Q","R","S"].sort();
let sum = 0;
let poslost = '';

function whatLetterisNotHere(){
    try {
        if(arr.length < 3){
            throw new Error('буква не пропущена');
        }
        const first = arr[0];
        const last = arr[arr.length - 1];
        const firstPosition = first.charCodeAt(0);
        const lastPosition = last.charCodeAt(0);
        for (let i = 0; i < arr.length; i++) {
            sum += arr[i].charCodeAt(0);
            poslost = (firstPosition + lastPosition) * (lastPosition - firstPosition + 1)/2 - sum ;
        }
        return String.fromCharCode(poslost);
    } catch (error) {
        return error.message
    }
}
console.log(whatLetterisNotHere());

