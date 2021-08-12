interface User {
    name: String;
    age: Number;
}

export class MyDatabaseClassic {
    private static _instance?: MyDatabaseClassic;
    private users: User[] = []

    private constructor () {}

    public static get instance (): MyDatabaseClassic {
        if (!MyDatabaseClassic._instance) {
            MyDatabaseClassic._instance = new MyDatabaseClassic();
        }

        return MyDatabaseClassic._instance;
    }

    public add (user: User): void {
        this.users.push(user);
    }

    public remove (index: number): void {
        this.users.splice(index, 1);
    }

    public show (): User[] {
        return this.users;
    }
}

const db = MyDatabaseClassic.instance;

db.add({ name: 'Diego', age: 13 });
db.add({ name: 'Diego', age: 13 });
db.add({ name: 'Diego', age: 13 });
db.add({ name: 'Diego', age: 13 });
console.log(db.show());
db.remove(1)
console.log(db.show());
