// 2. Создайте класс Student, который будет содержать имя, возраст и массив оценок. Напишите метод
// getAverageGrade(), который возвращает средний баллстудента.
// Входные: Student("Alice", 20, [5, 4, 5, 3, 4]) → Результат: "Alice (20) имеет средний балл 4.2"
// Входные: Student("Bob", 22, [3, 2, 3, 4, 3]) → Результат: "Bob (22) имеет средний балл 3.0"
// Входные: Student("John", 19, [4, 4, 4, 5, 5]) → Результат: "John (19) имеет средний балл 4.4"


class Student{
    constructor(name, age , results){
        this.name = name;
        this.age = age;
        this.results = results;
    }

    geAverageGrade(){

       const res = this.results.reduce(function(sum,el){
             return sum += el 
        },0)
        const finish = res/this.results.length;
        
        
        console.log(`${this.name} (${this.age}) имеет средний балл ${fin}`);
        
    }
}

const student = new Student("Bob", 22, [3, 2, 3, 4, 3])

student.geAverageGrade();