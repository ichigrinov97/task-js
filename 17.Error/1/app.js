// 1.
//  На входе значение. Необходимо его обработать. Если это число и оно не является четным,
//  бросить исключение

const n = 4;

function isN(){
    try {
        if(!isNaN(n) && n%2 !==0){
            throw new Error('не является четным')
        }else{
            return true
        }
    } catch (error) {
        return error.message;
    }
}
console.log(isN());
