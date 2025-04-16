// 1.
// Реализовать метод getType(a, b, c), который определяет тип треугольника по его сторонам.
// const triangle = new Triangle();
// triangle.getType(3, 3, 3) // "равносторонний"
// triangle.getType(3, 3, 5) // "равнобедренный"
// triangle.getType(3, 4, 5) // "разносторонний"


class Triangle{
    getType(a,b,c){
        if(a+b>c && a+c >b && b+c > a ){
            if(a == b && a == c && b == c){
                console.log('треугольник равносторонний');
            }
            if(a == b && a !==c || a == c && a !==b || b==c && b !== a){
                console.log('треугольник равнобедренный');
                
            }
            if(a !== c && a !==b && b !==c){
                console.log('треугольник разносторонний');
                
            }
        }else{
            console.log('треугольник не существует');
            
        }
    }
}

const triangle = new Triangle();
triangle.getType(3,3,3)