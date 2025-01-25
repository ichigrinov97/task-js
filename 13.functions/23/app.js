// . Создатьфункцию,котораяпринимаетстрокуивозвращаетеебездублирующихсясимволов.
//  Входные: removeDuplicates('hello') → Результат: 'helo’

const str = 'hello'

const newStr = (strTest) =>{
    const arr = strTest.split('');
    const newarr = []
    for (let i = 0; i < arr.length; i++) {
       if (!newarr.includes(arr[i])) {
        newarr.push(arr[i])
       }
        
    }
    return newarr.join('')

}
const result = newStr(str);
console.log(result);
