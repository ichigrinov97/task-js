// 8. Реализуйте функцию, которая находит наибольшее общее кратное (НОК) двух чисел.
// Добавить проверку наввод (вводимые значения должны быть целымичислами).
// Пример:
// НОК(6, 8)-> 24


const n1 = 6;
const n2 = 8;
let res = 0;

function nOk(){
    try {
        if(isNaN(n1)|| isNaN(n2)){
            throw new Error('переменная не число');
        }
        for (let i = 1; i < n1*n2 ; i++) {
            if(i% n1 == 0 && i% n2 == 0){
                res = i;
            }
            
        }
        return res;
    } catch (error) {
        return error.message;
    }
}
console.log(nOk());
