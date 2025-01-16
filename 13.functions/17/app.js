// 17. Написать функцию, принимающую в параметрах строку текста в маленьком регистре. Разбить 
// строку на массив. Функция должна вернуть строку, где каждый элемент массива в чередование 
// регистров toLowerCase, toUpperCase
//  hschool-> HsChOoL

const str = 'hschool'

const arg = (a) => {
    const arr = a.split('');
    const arr2 = []
    for (let i = 0; i < arr.length; i++) {
        i % 2 !== 0 ? arr2.push(arr[i].toLowerCase()) : arr2.push(arr[i].toUpperCase());  
    }
    return arr2.join('')
}

const result = arg(str)
console.log(result);
