// Создайте объект textAnalyzer с полем text– строка и методом getTextLength, который
// возвращает длину текста, хранящегося вполе text. В задаче использовать контекст


const textAnalyzer = {
    text: 'hello',
    getTextLength: function (){
        return this.text.length

    }
}
const result = textAnalyzer.getTextLength()
console.log(result);

