// 5. Создайте функцию, которая принимает число multiplier и возвращает замыкание, которое 
// принимает число n и возвращает результат умножения n * multiplier.
//  const double = createMultiplier(2);
//  double(5); // 10
//  double(5); // 50


function createMultiplier(n){
    let multiplier = n;
    return function (newVal){
        multiplier *= newVal;
        console.log(multiplier);
         
    }
}
const double = createMultiplier(2);
 double(5); // 10
 double(5); // 50