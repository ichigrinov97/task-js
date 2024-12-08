// 27. Дана строка. Напишите программу, которая с помощью цикла for подсчитывает количество
// согласных букв в строке. Согласные: b, c, d, f, g, h, j, k, l, m, n, p, q, r, s, t, v, w, x, y, z.


let str = ' AEIOU'
let hm = 0;

for(let i =0; i<str.length; i++){
   if('bcdfghjklmnpqrstvwxz'.includes(str[i])){
    hm += 1
   } 
}console.log(hm);
