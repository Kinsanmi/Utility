// Generics with classes

interface DatabaseType<T> {
    get(id: string): T;
    set(id: string, value: T) : void

}


interface Persistance {
    saveToString(): string;
    restoreString( storedState: string) : void;
}

class InMemoryDataBase<T> implements DatabaseType<T> {
    protected db: Record<string, T> = {};
    get(id: string): T{
        return this.db[id];
    }

    set(id: string, value: T): void {
        this.db[id] = value
    }
}


// Map types

type MyDogInfo = {
    name: string;
    [key: string] : string | number
} 

const dogs: MyDogInfo = {
    name: "rex",
    breed: "Husky"
}

interface DogInfo {
    name: string;
    age: number;
}

type optionFlags<Type> = {
    [Property in keyof Type]: boolean;
}

type DogInfoOptions = optionFlags<DogInfo>;


// Readonly in classes
class Doggy {
    constructor ( public readonly name: string, age: number) {

    }
}

const lgg = new Doggy("LG", 10);
const lggy = new Doggy("", 10);

console.log(lgg.name);


class DogList {
    private doggies: Doggy[];

    static instance: DogList = new DogList();

    private constructor() {}

    public addDog(dog: Doggy) {
        this.doggies.push(dog)
    }
}


DogList.instance;

// Abstract classes


abstract class StreetFighter {
    constructor() {}

    move() {}
    fight() {
         console.log(`${this.name} attack with ${this,this.getSpecialAttack}`)
    }

    abstract getSpecialAttack(): string;
    abstract get name(): string
}

class Ryu extends StreetFighter {
    getSpecialAttack(): string {
        return " Hadoken";
    }
    get name(): string {
        return "Ryu";
    }
}

const ryu = new Ryu();
ryu.fight()
