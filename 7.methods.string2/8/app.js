// 8. Навходподается строка, представляющая URL, например, "http://example.com". Убедитесь, что URL
// начинается с http:// или https://.
// Входные: "http://example.com" → Результат: true
// Входные: "https://site.org" → Результат: true
// Входные: "ftp://files.net" → Результат: false

const a = 'http://example.com';

if(a.startsWith('http://') || a.startsWith('https://')){
    console.log(true);

    
}else{
    console.log(false);
    
}