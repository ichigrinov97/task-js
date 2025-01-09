// 2. Напишите функцию, которая принимает строку состоящую из нескольких слов. Каждое нечетное 
// слово строки функция должна преобразовать в нижний регистр, все четные слова, соответственно, 
// в верхний
//  happy new year -> happy NEW year





function doStr(a) {
    const arr = a.split(' ')
    const b = []
    for (let i = 0; i < arr.length; i++) {
        if (i % 2 !== 0) {
            b.push(arr[i].toUpperCase())
        } else {
            b.push(arr[i].toLowerCase())
        }

    }
    return b.join(' ')
}

const str = 'happy new year'
const result = doStr(str)
console.log(result);






