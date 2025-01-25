// Напишите функцию, которая принимает два параметра: предложение из нескольких слов и
//  букву. Функция должна подсчитывать количество вхождений указанной буквы в строке. 
// Добавить проверки

const str = 'hello it is me';
const symb = 'i';

const res = (strT , symbT) =>{
    let count = 0;
    const arr = strT.split('');
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] === symbT) count += 1;
        
    }
    return count
}
const result = res(str, symb);
console.log(result);

