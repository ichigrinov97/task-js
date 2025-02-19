// 2. Рекурсивно переверните строку
//  console.log(reverseString("hello")); // "olleh"
//  console.log(reverseString("a")); // "a"
//  console.log(reverseString("")); // ""


// const str = 'hello';
// let i = str.length - 1;
// let rev = '';

// function reverse(){
//     if(i == -1) return ;
//     rev += str[i];

//     i--
//     reverse();
// }
// reverse()
// console.log(rev);


// const arr = [1,2,3,4,5];
// let sum = 0;
// let i = 0;


// function doSum (){
//     if(i == arr.length ) return ;

//     sum += arr[i];
//     i++
//     doSum();
// }
// doSum();
// console.log(sum);


const str = 'hello world'.split(' ');
let i = 0;
let str2 = '';

function newStr (){
    if(i == str.length) return str;
    if(str[i] == str[str.length - 1]){
        str2 += str[i] ;
    }else{
        str2 += str[i] + '-' ;
    }
    

    i++
    newStr() 
}
newStr();
console.log(str2);

