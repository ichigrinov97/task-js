// Реализуйте класс DomHtml, который будет взаимодействовать с DOM по клику на кнопку. 
// Класс содержит 4 метода: doPlus, doMinus, doMultiply, doDivide



class DomHtml{
    inpt1 = document.querySelector('.first');
    inpt2 = document.querySelector('.second');
    btn = document.querySelector('button');
    plus = document.querySelector('.plus');
    minus = document.querySelector('.minus');
    mult = document.querySelector('.mult');
    divide = document.querySelector('.divide');
    doPlus(){
        this.btn.addEventListener('click',() => {
            this.plus.textContent = ` результат сложения ${+this.inpt1.value + +this.inpt2.value}`

           
            
        })
    }
    doMinus(){
        this.btn.addEventListener('click',() => {
            this.minus.textContent = ` результат вычитания ${+this.inpt1.value - +this.inpt2.value}`
 
        })
    }
    doMultiply(){
        this.btn.addEventListener('click',() => {
            this.mult.textContent = ` результат умножения ${+this.inpt1.value * +this.inpt2.value}`
 
        })
    }
    doDivivde(){
        this.btn.addEventListener('click',() => {
            this.divide.textContent = ` результат деления ${+this.inpt1.value / +this.inpt2.value}`
 
        })
    }
}
const dohtml = new DomHtml();
dohtml.doPlus()
dohtml.doMinus()
dohtml.doMultiply()
dohtml.doDivivde()