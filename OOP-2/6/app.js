// 6. Создайте класс SentenceRepository, который имеет массив строк sentences. Наследуйте от него
//  класс LongestSentence, добавив метод getLongestSentence(), который возвращает самую длинную
//  строку поколичествусимволов.
//  Входные:
//  const repo = new LongestSentence(["Hello world", "This is a longer sentence", "Short"]);
//  repo.getLongestSentence();
//  → Результат: "This is a longer sentence"
//  Входные:
//  const repo = new LongestSentence(["JavaScript is fun", "Coding", "Learning new things"]);
//  repo.getLongestSentence();
//  → Результат: " Learning new things"
//  Входные:
//  const repo = new LongestSentence(["Small", "Medium sized", "A sentence that is quite long"]);
//  repo.getLongestSentence();
//  → Результат: "A sentence that is quite long"




class SentenceRepository{
    sentences = ["Hello world", "This is a longer sentence", "Short"];
}
class LongestSentence extends SentenceRepository{
    getLongSentence(){
        let count = 0
        let str = ''
        this.sentences.forEach(function(el){
            if(el.length > count){
                count = el.length
                str = el
            }
            
        })
        return str;
    }
}

const longestSentence = new LongestSentence();
console.log(longestSentence.getLongSentence());
