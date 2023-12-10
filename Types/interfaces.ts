// interface
interface Point{
    x: number;
    y: number;
}

const pt: Point = { x: 33, y: 45 }

interface Person {
    readonly id: number
    first: string
    last: string
    nickname ?: string
    // adding methods to interface
    //sayHi() must be a method which accepts 0 args and returns a string
    //sayHi: () => string 
    sayHi(): string
}

const thomas: Person = { 
    first: "Thomas", 
    last: "Hardy", 
    id: 234, 
    nickname: "Tom Hardy", 
    sayHi: () => {
        return "Hello! This is Tom!"
    }
}

interface Product {
    name: string,
    price: number,
    applyDiscount(discount: number): number;
}

const shoes: Product = {
    name: "Blue Suede Shoes",
    price: 100,
    applyDiscount(amount: number){
        const newPrice = this.price * (1 - amount);
        return newPrice;
    }
}

// re-opening interfaces
interface Dog { name: string, age: number }
interface Dog { breed: string, bark(): string }

const Elton: Dog = { name: "Elton", age: 1, breed: "Australian Shepherd", 
    bark() {
        return "woof";
    }
}

// extending interfaces
interface ServiceDog extends Dog {
    job: "drug-sniffer" | "service-dog" | "pet";
}

const chewy: ServiceDog = {
    job: "pet",
    name: "Chewy",
    age: 4.5,
    breed: "Labrador",
    bark: function (): string {
        return "Bark!!";
    }
}