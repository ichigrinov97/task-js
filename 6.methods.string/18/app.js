// На вход подается строка, состоящая из имени и фамилии, разделенных пробелом. Проверьте, что
//  имя и фамилия начинаются с заглавной буквы




const a = "Cris ham";
const b = a.split(' ');






if(b[0][0] == b[0][0].toUpperCase() && b[1][0] == b[1][0].toUpperCase()){
    console.log(true);
    
}else{
    console.log(false);
    
}

