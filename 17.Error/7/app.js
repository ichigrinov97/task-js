// 7. На входподается строка. Необходимо удалить все гласные из строки. Добавить проверки на
// ввод строки (ввод должен быть строкой).
// "hello"-> "hll",
// "world"-> "wrld"

const string = 'hello';
const gl = 'eyuioa';
let res = '';

function onlySgl(){
    try {
        for (let i = 0; i < string.length; i++) {
            if(!isNaN(string[i])){
                throw new Error('неверный символ');
            }
            if(!gl.includes(string[i])){
                res+= string[i];
            }
        }
        return res;
    } catch (error) {
        return error.message;
    }
}
console.log(onlySgl());
