type Admin = {
    name: string;
    age: number;
    role: string;
}

type Person = unknown;

const logPerson = (user: Person) => {
    console.log(`${user.name}, ${user.age}`);
}

persons.forEach(logPerson);
