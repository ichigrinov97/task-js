// 9. Написать функцию, которая принимает строку и символ и возвращает новый объект с количеством
//  вхожденийсимволаииндексами,гдеонвстречается.
//  Входные: charStats('hello', 'l') → Результат: {count: 2, indices: [2, 3]}

const str = 'hello'
const symb = 'l'

 
const res = (strTest) =>{
    let count = 0;
    let arr2 = [];
    const arr = strTest.split('')
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] == symb){
            count += 1
            arr2.push(i)
        }
        
    }
    return {count : count , indices : arr2}
}
const result = res(str)
console.log(result);
