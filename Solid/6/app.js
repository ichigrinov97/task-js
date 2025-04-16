// 1.
//  Реализовать метод reverse(str), который переворачивает строку без использования метода 
// reverse. 
// const reverser = new StringReverser();
//  reverser.reverse("hello") // "olleh"
//  reverser.reverse("12345") // "54321«1.
//  Реализовать метод reverse(str), который переворачивает строку без использования метода 
// reverse. 
// const reverser = new StringReverser();
//  reverser.reverse("hello") // "olleh"
//  reverser.reverse("12345") // "54321«


class StringReverser{
    reverse(str){
        let newstr = [];
        for (let i = str.length - 1; i >= 0; i--) {
             newstr.push(str[i]);
        }
        return newstr.join('')
    }
}

const reverser = new StringReverser();
console.log(reverser.reverse('hello'));
