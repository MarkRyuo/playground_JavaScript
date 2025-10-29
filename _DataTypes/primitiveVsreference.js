
// primitive 
let str = "The brown fox jumps over the lazy dog"
console.log(typeof str)

let num = 22;
console.log(typeof num)

let bool = true;
console.log(typeof bool)


// reference 
// 'this' keyword is a reserve keyword in JavaScript, which is referencing the object or the name of object
const obj = {
    name: "John Doe",
    age: 22,
    active: true,
    func: function () {
        return `My name is ${this.name}, I'm ${this.age} and active in gym which is ${this.active}!`
    } // function expression
}

console.log(typeof obj)
console.log(obj.func()) 

const arr = ["Jane Doe", 22, false, [0, 1, 2, 3] ]
console.log(typeof arr)
