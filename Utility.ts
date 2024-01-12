// Partial<Type>

interface MyUser {
    name: string;
    id: string;
    email?: string;
}


type MyUserOptional = Partial<MyUser>



const merge = (user: MyUser, override: MyUserOptional): MyUser=> {
     return {
        ...user,
        ...override
     }
}


console.log(merge({
    name: "mike",
    id: "2",
    email: "email.come"
}, {}))



// required type
type RequiredMyUser = Required<MyUser>


// pick type

type PickMyUser = Pick<MyUser, "name" | "email">




interface Tools {
    name: string;
    data: string;
    date: number;
}

type ToolKit = Partial<Tools>



const added =(Name: Tools, override: ToolKit ): Tools =>{
    return {
        ...Name,
        ...override
    }
}


console.log(added({
    name: "mike",
    data: "collection",
    date: 2024
}, {}))



type PickTools = Pick<Tools, "name" | "date" | "data">



interface CatInfo {
    name: string;
    data: string;
    date: number;
}

type CatName = "Cool" | "Bo" ;


const cats: Record<CatName, CatInfo> = {
    Cool: {name: "cats", data: "mixed", date: 2020},
    Bo: {name: "cats", data: "mixed", date: 2020},
}



// Read only utility type

interface Todo {
    title: string;
    Price: number;
}

type ReadOnlyCat = Readonly<Todo>

function makeCat (title: string, Price: number): ReadOnlyCat {
    return {
        title,
        Price
    }
}
const Rex = makeCat("go", 20);







// Database

interface Database {
    get( id: string): string;
    set( id: string, value : string): void;
}


class MemoryDataBase implements Database {
    db: Record<string, string> = {}
    get( id: string): string {
        return this.db[id];
    }

    set(id: string, value: string): void {
        this.db[id] = value;
    }
}

const DB = new MemoryDataBase();
DB.set("foo", "bar");

console.log(DB.get("foo"));

