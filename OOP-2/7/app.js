// 7. Создайте класс Person с атрибутом name. Наследуйте от него класс Employee, добавив атрибуты
//  position и monthly_salary. Реализуйте метод getAnnualSalary(), возвращающий годовую зарплату.
//  Входные: Employee("Alice", "Developer", 5000) → Результат: 60000
//  Входные: Employee("Bob", "Manager", 7000) → Результат: 84000
//  Входные: Employee("Charlie", "Designer", 4000) → Результат: 48000


class Person{
    name = 'Alice' ;
    position = 'Developer';
    monthly_salary = '7000';
}

class Employee extends Person{

    getAnnualSalary (){
        console.log(this.monthly_salary * 12);
        
    }
}

const employee = new Employee();
employee.getAnnualSalary();

