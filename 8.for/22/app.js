// 22. Дан массив с названиями дней недели ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", 
//     "Saturday", "Sunday"]. Вам нужно с помощью цикла for пройти по каждому элементу массива и с
//      помощью конструкции switch определить, будний это день или выходной, а затем вывести
//      соответствующуюинформациюнаэкран.
//      Входные: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"] → Результат:
//      Monday - буднийдень
//      Tuesday - буднийдень
//      Wednesday - буднийдень
//      Thursday - буднийдень
//      Friday - буднийдень
//      Saturday - выходнойдень
//      Sunday - выходнойдень



let arr =  ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];


for(let i = 0; i<arr.length;i++){
    switch (arr[i]) {
        case 'Monday':
            console.log('monday- будний день');
            break;
        case 'Tuesday':
            console.log('tuesday- будний день');
            break;
        case 'Wednesday':
            console.log('wednesday- будний день');
            break;
        case 'Thursday':
            console.log('Thursday- будний день');
            break;
        case 'Friday':
            console.log('Friday- будний день');
            break;
        case 'Saturday':
            console.log('Saturday- выходной день');
            break;
        case 'Sunday':
            console.log('Sunday- выходной день');
            break;
    }
}