// Дан массив. Вывести те элементы массива, id которых – четное значение. Добавить
// проверки
// [{ "id": 1, "label": "JavaScript", "category": "programmingLanguages", "priority": 1 },
//     { "id": 2, "label": "TypeScript", "category": "programmingLanguages", "priority": 1 },
//     { "id": 3, "label": "SQL", "category": "programmingLanguages", "priority": 2 },
//     { "id": 4, "label": "Java", "category": "programmingLanguages", "priority": 3 },
//     { "id": 5, "label": "GO", "category": "programmingLanguages", "priority": 3 }
// ]

const arr = [{ "id": 1, "label": "JavaScript", "category": "programmingLanguages", "priority": 1 },
{ "id": 2, "label": "TypeScript", "category": "programmingLanguages", "priority": 1 },
{ "id": 3, "label": "SQL", "category": "programmingLanguages", "priority": 2 },
{ "id": 4, "label": "Java", "category": "programmingLanguages", "priority": 3 },
{ "id": 6, "label": "GO", "category": "programmingLanguages", "priority": 3 }
];
const newarr = [];

function idIsChet() {
    try {
       if(arr.length == 0){
        throw new Error('массив пуст')
       } 
        for (let i = 0; i < arr.length; i++) {
            if (typeof arr[i].id == 'number' && arr[i].id % 2 == 0) {
                 newarr.push(arr[i])
            }

        }
        return newarr;
        
    } catch (error) {
        return error.message;
        
    }
}
console.log(idIsChet());

