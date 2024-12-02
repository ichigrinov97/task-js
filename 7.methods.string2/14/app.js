// 14. На вход подается строка в формате пути, например '/home/user/dir/file.txt'. Необходимо извлечь и
// вернуть имя файла,то есть подстроку после последнего символа/.
// Входные: '/home/user/dir/file.txt' → Результат: 'file.txt'
// Входные: '/docs/report.pdf' → Результат: 'report.pdf'
// Входные: '/images/photo.png' → Результат: 'photo.png’


const a = '/home/report.pdf';

const b = a.split('/');

console.log(b.slice(-1));







