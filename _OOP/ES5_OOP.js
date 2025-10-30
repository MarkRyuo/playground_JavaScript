
// Encapsulation & Abstraction
function Book(name, author, year){
    
    if(this.constructor === Book){
        throw new Error("Cannot instantiate abstract class 'Book'")
    }
    this.name = name;
    this.author = author;
    this.year = year;
}

Book.prototype.display = function(){
    throw new Error("Abstract method 'display()' must be implemented by subclass")
}


// Inheritance 
function Magazine(name, author, year, yearend){
    Book.call(this, name, author, year)
    this.yearend = yearend;
    
}


//Polymorphism 
Magazine.prototype.display = function(){
    return `Book Name: ${this.name}, Author Name: ${this.author}, Year Created: ${this.year}, Year End: ${this.yearend}`
}// function expression

//Initialize
const Book2 = new Magazine("Book1", "Jane Doe", 2003, 2004);
console.log(Book2.display())


//Object & Object Property

//Object.create()
//Object.keys()
//Object.values()
//Object.entries()
//Object.assign()
//Object.freeze()
//Object.seal()
//Object.getPrototypeOf()