// 21. Дан массив оценок (чисел от 1 до 5) [5, 4, 3, 5, 2, 4, 1, 3, 5, 2, 4]. Необходимо подсчитать, сколько раз 5
//  встречается в массиве. Используйте цикл for для итерации по массиву и оператор switch для
//  подсчета количествакаждой оценки.


let arr = [5, 4, 3, 5, 2, 4, 1, 3, 5, 2, 4];
let num = 0;

for(let i = 0; i<arr.length; i++){

    switch (arr[i]) {
        case 5:
            num +=1;
            
            
            
            break;
    
    }
    
}console.log(num);