// 11. Создать функцию, которая принимает строку и возвращает true, если она состоит из уникальных
// символов.
// Входные: hasUniqueChars('abc') → Результат: true

const str = 'abc'

const res = (strTest) => {
    const arr = strTest.split('')
    const arr2 = []
    for (let i = 0; i < arr.length; i++) {
        if (!arr2.includes(arr[i])) {
            arr2.push(arr[i])
        }

    }
    let bool = false
    if (arr2.length == arr.length) {
        bool = true
    }else {
        bool
    }
    return bool
}
const result = res(str)
console.log(result);
