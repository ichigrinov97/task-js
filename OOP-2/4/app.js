// 4. Создайте класс StringRepository, который имеет статичный массив words ["apple", "apricot", "lemon", 
//     "mango", "nectarine", "banana", "kiwi", "plum"]. Наследуйте от него класс FilteredWords, добавив метод
//      getWordsByLength(length), который возвращает только те слова, длина которых равна заданному
//      значению.
//      Входные:
//      const repo = new FilteredWords();
//      repo.getWordsByLength(5);
//      → Результат: ["apple", "lemon", "mango"]



class StringRepository{
    arr = ["apple", "apricot", "lemon", "mango", "nectarine", "banana", "kiwi", "plum"]
}

class FilteredWords extends StringRepository{
    getWordsByLength(val){
        const newarr = this.arr.filter(function(el){
            if(el.length == val)  return true
        })
        return newarr
    }
}

const stringRepository = new FilteredWords();

console.log(stringRepository.getWordsByLength(5));
 


 