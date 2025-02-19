// 7. Создайте каррированную функцию, которая принимает три аргумента: time, user, message, и 
// возвращает строку в формате: "At [time], [user] said: [message]". 
// createMessage("5:00 PM")("Alice")("Goodbye!"); // "At 5:00 PM, Alice said: Goodbye!


function text(time) {
    return (user) => {
        return (message) => {
            return "At" + ' ' + time + "," + ' ' + user + ' ' + "said:" + ' ' + message;
        }
    }

}
console.log(text('5:00 PM')("Alice")("Goodbye!"));
