// 5. Реализуйте класс Anagram (Анаграмма это слово или фраза , полученный путем замены букв 
// исходного слова или фразы). Создать функцию для вывода ряда true, если слова являются анаграммами. Добавитьпроверкина ввод

class Anagram{

    constructor(str1,str2){
        this.str1 = str1;
        this.str2 = str2;
    }

    bool(){
        const arr1 = `${this.str1}`.split('').sort().join('');
        const arr2 = `${this.str2}`.split('').sort().join('');
        if(arr1 === arr2){
            console.log(true);
            
        }else{
            console.log(false);
            
        }
    }
}

const result = new Anagram('нора','рано');
result.bool();