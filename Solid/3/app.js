// 1.
//  Реализовать очередь на основе массива, поддерживающую добавление элементов 
// (enqueue), удаление (dequeue) и проверку на пустоту (isEmpty).
//  const queue = new Queue();
//  queue.isEmpty() // true -> Массив пустой
//  queue.enqueue(1);
//  queue.enqueue(2);
//  queue.dequeue()


class Array{
    arr = []
    enqueue(a){
        this.arr.push(a)
        return this.arr;
    }
    dequeue(){
         this.arr = this.arr.slice(1)
         return this.arr;
    }
    
    isEmpty(){
        if(this.arr.length == 0){
            return 'массив пустой'
        }else{
            return 'массив заполнен'
        }
    }
}

const array = new Array();
console.log(array.enqueue(1));
console.log(array.enqueue(1));
console.log(array.enqueue(1));
console.log(array.enqueue(1));
console.log(array.enqueue(1));
console.log(array.dequeue());
console.log(array.isEmpty());

