// Необходимо реализовать конкатенацию строк при каждом последующем вызове функции с
// использованием замыкания

function strSum (){
    let strDefault = '';
    return function (str){
        strDefault += str;
        console.log(strDefault);
        
    }
}
const result = strSum();
result(prompt(''));
result(prompt(''));
result(prompt(''));
result(prompt(''));
result(prompt(''));
