// 17. Используя цикл for, выведите числа от 1 до 50. Если число одновременно кратно 2 и 3, пропустите
// его иперейдитекследующейитерации.


for(let i =1; i<=50;i++){
    if(i%2 ==0 && i%3 == 0){
        continue
    }
    console.log(i);
    
}