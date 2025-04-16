// 1.
// Реализовать класс User, хранящий username и password. Добавить метод 
// checkPassword(input), который возвращает true, если пароль совпадает.
// const user = new User("admin", "12345");
// user.checkPassword("12345") // true
// user.checkPassword("wrong") // false


class User {
    constructor(username, password) {
        this.username = username;
        this.password = password;
    }
    checkPassword(input) {
       return input == this.password ? true : false;

    }

}

const user = new User("admin", "12345");
console.log(user.checkPassword("1234"));
