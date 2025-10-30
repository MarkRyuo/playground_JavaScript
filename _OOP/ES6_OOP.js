


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
console.log(book1.display())


// Inheritance 

class Magazine extends book {

    constructor(name, author, year, endyear){
        super(name, author, year);
        this.endyear = endyear;
    }

    endingYear(){
        return `This is the end year of this book named ${this.name}, Ending is year ${this.year}`
    }
}

const endingyear = new Magazine(...book1, "2004") ;
console.log(endingyear.endingYear())



