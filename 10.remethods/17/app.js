// 17. Напишите функцию, которая принимает любое количество строковых аргументов и возвращает
//  массив этихстрок вверхнем регистре. Используйте оператор rest.
//  Входные: toUpperCase('apple', 'banana', 'cherry') → Результат: ['APPLE', 'BANANA', 'CHERRY']
//  Входные: toUpperCase('dog', 'cat') → Результат: ['DOG', 'CAT']






function test(...arr){
    const result = arr.map(function(el){
        return el.toUpperCase()
    })
    console.log(result);
    
}
test('dog', 'cat') 
 