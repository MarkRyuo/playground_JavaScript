

// Payment Method 

//Abstraction
class payment {

    constructor(name, address, contact){
        this.name = name;
        this.address = address;
        this.contact = contact;
    }

    getDefault(){
        return {
            name: this.name,
            address: this.address,
            contact: this.contact
        } // returning a object 
    }

    display(){
        return `Maybe call this in subclasses`
    }
}

// Inheritance 
class gcashPaymet extends payment {

    constructor(name, address, contact, gnumber){
        super(name, address, contact)
        this.gnumber = gnumber;
    }

    // polymorphism (override)
    getDefault(){
        const getTheDefault = super.getDefault();
        return {
            ...getTheDefault,
            gcashNumber: this.gnumber
        }
    }

    display(){
        const {name, address, contact, gnumber} = this.getDefault() ;
        return `
            Name: ${name}
            Address: ${address}
            contact: ${contact}
            Gcash Number: ${gnumber}
        `
    }
}


const personGcash = new gcashPaymet("John Doe", "Beyond the World", "johndoe@gmail.com", "099-3232-3245" )
console.log(personGcash.display())

