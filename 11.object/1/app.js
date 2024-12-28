// 1.
//  Навходе пустой объект.Выполните следующие шаги:
//  • Добавьте свойство id со значением 1.
//  • Добавьте свойство name со значением"udemy".
//  • Измените значение свойства name на"hschool".
//  • Удалите свойство name изобъекта

const obj = {};

obj.id = 1;
obj.name = 'udemy';
obj.name = 'hschool';
delete obj.name

console.log(obj);
