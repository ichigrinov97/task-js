// 1.
// Реализовать метод compress(str), который сжимает строку, заменяя повторяющиеся 
// символы на {символ}{количество} (например, "aaabbc" → "a3b2c1").
// const compressor = new StringCompressor();
// compressor.compress("aaabbc") // "a3b2c1"
// compressor.compress("abcdef") // "abcdef"
// compressor.compress("aabbcc") // "a2b2c2"


class StringCompressor{
    result = ''
    count = 0;
    compress(str){
        for (let i = 0; i < str.length; i++) {
            if(!this.result.includes(str[i])){
                this.result += str[i]
            } 
            
        }
        for (let j = 0; j < str.length; j++) {
            
            
        }
    }
    
}

const compressor = new StringCompressor();
console.log(compressor.compress('aaabbc'));
