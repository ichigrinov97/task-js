// На вход подается строка вида: путь к файлу. Необходимо написать регулярное 
// выражение для данной строки. Если же строка подходит под регулярное 
// выражение, то вывести булевое true, в противном случае бросить исключение и 
// обработать
//  C:\Users\Admin\Desktop\test.txt -> true
//  C:/Users/Admin/Desktop/test.txt -> true

const route = 'C:\\Users\\Admin\\Desktop\\test.txt';


function isRoute(){
    return /^[\w\.\-]+:(\\|\/)[\w\.\-]+(\\|\/)[\w\.\-]+(\\|\/)[\w\.\-]+(\\|\/)[\w]+\.[\w]+$/gm.test(route);
}
console.log(isRoute());
