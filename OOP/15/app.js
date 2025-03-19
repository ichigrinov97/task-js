// 1.
//  Создайте класс TodoList, инициализируйте в конструкторе пустой массив tasks. Реализуйте метод 
// addTask(task) для добавления новой задачи в массив, а также метод showTasks(), возвращающий 
// текущий список задач.
//  const list = new TodoList();
//  list.addTask("Купить молоко");
//  list.addTask("Позвонить другу");
//  console.log(list.showTasks()); // ["Купить молоко", "Позвонить другу"]


class TodoList{
    tasks;

    constructor(){
        this.tasks = []
    }

    addTask(task){
        this.tasks.push(task);
    }
    showTasks(){
        return this.tasks;
    }
}
const list = new TodoList();
list.addTask("Купить молоко");
list.addTask("Позвонить другу");
console.log(list.showTasks())