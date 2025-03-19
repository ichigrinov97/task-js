// 3. Создайте класс User с конструктором, принимающим имя и email пользователя. Реализуйте метод 
// changeEmail, который обновляет email, и метод getEmail, возвращающий текущий email.
//  const user = new User("Иван", "ivan@example.com");
//  user.changeEmail("new@example.com");
//  console.log(user.getEmail()); // new@example.com


class User{
    name;
    mail;

    constructor(name,mail){
        this.name = name;
        this.mail = mail;
    }

    changeEmail(){
       this.mail = 'new@example.com';
    }
    getEmail(){
        return this.mail;
        
    }
}

const user = new User('Иван','ivan@example.com');
user.changeEmail();
console.log(user.getEmail());
 