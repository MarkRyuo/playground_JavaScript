
// Easy and normal OOP 

class book {

    constructor(name, author, year){
        this.name = name;
        this.author = author;
        this.year = year;
    }

    //prototypes
    display(){
        return `Book Name: ${this.name}, Author Name: ${this.author}, Year Created: ${this.year}`
    };

}

//Initialization
const book1 = new book("Book 1", "John Doe", "2003");


// Inheritance 
class Magazine extends book {

    constructor(name, author, year, endyear){
        super(name, author, year);
        this.endyear = endyear;
    }

    endingYear(){
        return `This is the end year of this book named ${this.name}, Ending is year ${this.year}`
    }

    //polymorphism (Override)
    display(){
        return `Magazine Name: ${this.name}, Author Name: ${this.author}, Created Year: ${this.year}, End Year: ${this.endyear}`
    }
}

const endingyear = new Magazine(book1.name, book1.author, book1.year, "2004") ;
console.log(endingyear.endingYear())
console.log(endingyear.display())



