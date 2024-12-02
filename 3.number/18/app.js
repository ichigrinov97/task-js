// Пользовательвводитсклавиатурычисло.Найдитекореньвведенногочисла (еслирезультат—
//     числосплавающейточкой,тоокруглитьдо2знаковпослезапятой)


let a = prompt('введите значение');

let b = Math.sqrt(a);
console.log('корень' ,b);


if(Number.isInteger(b)){
    console.log(b);
    
} else if(!Number.isInteger(b)){
    console.log(b.toFixed(2));
    
}