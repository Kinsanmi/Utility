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



// Getting started with typescript and the basics functionality

let myData: string = "medicine";

let Reg: RegExp = /foo/;

// Array of object

const object = []

// generic

const myType: Array<string | number> = [1,2,5,"2","20"];

interface Names {
    jada: string;
    john: string;
    peter: string;
    tom: string
}


const myNmaes : Names = {
    jada: "jada",
    john: "jada",
    peter: "jada",
    tom: "jada",
}


const myPerson: {
    first: string;
    last: string;
} = {
    first: "jack",
    last: "john",
}

// basic function 

function myFunction (a: number, b: string): string{
    return a + b;
}

console.log((10+ 5));

// Any type implicit does not have  value type definition

// Value type definition needs to have a type of string, number, boolean, Regexp

// exporting in function via const and pass in the function argument

export const functionName = (station1: string, station2: string, station3: string): string =>{
    return `${station1} ${station2} ${station3}`
}

console.log(functionName("001", "002", "003"));

// Union type in a function argument

export const added = (title: string, style: string | number): string => {
    return `${title} ${style}`
}

console.log(added("Commissions", 20))

function secondType (list : {set: string | number, year: number}): string {
    return `${list.set} ${list.year}`
}

console.log(secondType({set: 2015, year: 2020}))

// Array mutation
export const arrayList = (number: number[], mutate: (v: number)=> number): number[] =>{
    return number.map(mutate);
}

console.log(arrayList([1,5,20], (v)=> v + 2));

// Declaring function as type

type Setting = (v: number) => number

export const arrayOfType = (number: number[], mutate: Setting) =>{
    // this returns an array of number using the function type or we rewrite as this below
}

/* type Direction = [x: number, y: number, z: number]

function findDirection (c1: Direction, c2: Direction): Direction{
    return ``

}

// Values of north added to values of south
console.log(findDirection([0,2,0], [4,6,8])); */

// Generics

function myGeneric<Collection, CollectionKey extends keyof Collection> (items: Collection[], Set: CollectionKey): Collection[CollectionKey][]{
    return items.map((item)=> item[Set])
}

const listing = [
    {names: "", type: ""}
]
console.log(myGeneric(listing, "type"));
console.log(myGeneric(listing, "names"));

// Utility types, partial, pick, record e.t.c

interface Scan {
    use: string;
    for: string;
    review: string;
}

// declare a new reference name

type MyScan = Partial<Scan>

// declare a function

const combine = (user: Scan, data: MyScan) =>{
    return {
        // return whatever we have in user and data
        ...user,
        ...data
    }
}
console.log(combine ({
    // pass in the string values
    use: "",
    for: "",
    review: ""
}, {}))
// Optional

// Pick types
// This selects a string from the interface
type Cool = Pick<Scan, "use" | "review">



