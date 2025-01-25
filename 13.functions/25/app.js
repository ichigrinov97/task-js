// 7. Создать функцию, которая принимает массив строк и возвращает массив только тех, которые
//  заканчиваются на заданныйсимвол.
//  Входные: endsWith(['hello', 'world', 'js'], 'd') → Результат: ['world’]

const symb = 'd'
const arr = ['hello', 'world', 'js'];

const res = (arrTest) =>{
    const newarr = arrTest.filter(el =>{
        if(el[el.length - 1] === symb){
            return true
        }
    })
    return newarr
}
const result = res(arr)
console.log(result);
