// 1.
//  * Реализовать метод encrypt(str, shift), который шифрует строку методом Цезаря.
//  const cipher = new CaesarCipher();
//  cipher.encrypt("abc", 3) // "def"
//  cipher.encrypt("xyz", 2) // "zab"
//  cipher.encrypt("hello", 5) // "mjqqt«

class CaesarCipher{
    result = ''
    alph = 'abcdefghijklmnopqrstuvwxyz'
    encrypt(str,shift){
        for (let i = 0; i < this.alph.length; i++) {
            for (let j = 0; j < str.length; j++) {
                if(this.alph[i] == str[j]){
                    this.result += this.alph[i + shift]
                }
                
            }
        }
        return this.result;
    }
}

const ciper = new CaesarCipher();
console.log(ciper.encrypt("hello", 5));
