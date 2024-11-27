// *Пользователь вводит три числа a,b,c.Напишите программу,которая находит корни квадратного
//  уравнения ax^2+bx+c=0 (ax2+bx+c=0).Если уравнение имеет два корня,следует вывести их в
//  порядке возрастания


let a = +prompt('введите значение a');
let b = +prompt('введите значение b');
let c = +prompt('введите значение c');

if(a !== 0 && !isNaN(a) && !isNaN(b) && !isNaN(c)){
    let d = (b**2 - 4 * a * c) ;
    if( d < 0 ){
        console.log('нет корней');
        
    }
    if( d == 0){
        console.log(-(b / (2 * a)));
        
    }
    if (d > 0){
        let x1 = (-b + Math.sqrt(d)) / (2 * a);
        let x2 = (-b - Math.sqrt(d)) / (2 *a);
        
        if(x1 !== 0 && x2 !==0){
            if( x1 < x2 ){
                console.log(x1);
                console.log(x2);
            }
            if(x2 < x1){
                console.log(x2);
                console.log(x1);
            }   
        }
        
        
    }
    
    
}else{
    console.log('неверные данные');
    
}
