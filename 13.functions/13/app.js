// 13. На входе строка. Необходимо создать функцию, возвращающую true, если это слово анаграмма и 
// false в противном случае

const str = 'Липа'.toLowerCase()
const str2 = 'Пила'.toLowerCase()

const res = (a, b) => a.split('').sort().join('') == b.split('').sort().join('')? true : false
    



const result = res(str, str2)
console.log(result)
