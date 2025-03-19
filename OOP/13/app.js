// 1.
//  Создайте класс Student, воспользуйтесь конструктором для задания имени и возраста студента. 
// Добавьте метод isAdult, который возвращает true, если возраст больше или равен 18, иначе — false.
//  const s1 = new Student("Олег", 20);
//  const s2 = new Student("Маша", 16);
//  console.log(s1.isAdult()); // true
//  console.log(s2.isAdult()); // false


class Student{
    name;
    years;

    constructor(name,years){
        this.name = name;
        this.years = years;
    }
    isAdult(){
        if(this.years >= 18){
            console.log(true);
            
        }else{
            console.log(false);
            
        }
    }
}

const student = new Student('Олег',16);
student.isAdult();