// 3. Рекурсивно сгенерируйте массив из n-рандомных чисел
//  console.log(generateRandom(5)); // [99, 11, 5, 3, 6]


const arr = [];
let i = 0;

function randomValues(){
    if(i == 5) return arr;
    arr.push(Math.round(Math.random()*100));

    i++
    randomValues();
}
randomValues();
console.log(arr);
