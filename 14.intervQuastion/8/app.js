// Реализуйте функцию, которая будет подсчитывать количество своих вызовов с
//  использованием замыкания. Каждый раз, когда функция вызывается, счетчик увеличивается
//  на 1 и возвращает текущее значение счетчика.


function multi (){
    let call = 0;
    return function (){
        call++
        console.log(call);
        
    }
}
const testCall = multi();
testCall();
testCall();
testCall();
testCall();
testCall();
testCall();
testCall();
