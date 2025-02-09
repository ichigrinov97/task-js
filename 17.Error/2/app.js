// 2. На входе массив значений. Необходимо его обработать. Если в массиве есть хотя бы 1
// строка, бросить исключение.


const arr = [1,2,3,4,];

function isArrHaveStr(){
    try {
        for (let i = 0; i < arr.length; i++) {
             if(typeof arr[i] !== 'number'){
                throw new Error('в массиве есть строка');
            }
        }
        return true;
    } catch (error) {
        return error.message;
    }
}
console.log(isArrHaveStr());
