// 15. Напишите функцию, которая принимает неограниченное количество аргументов (чисел) и
// возвращает их сумму.Используйте оператор rest для обработки аргументов.
// Входные: sum(1, 2, 3) → Результат: 6
// Входные: sum(4, 5, 6, 7) → Результат: 22



function sum(...arr){
    let result = 0;
    for(el of arr){
        result += el
    }
    console.log(result);
    
}
sum(4,5,6,7);



