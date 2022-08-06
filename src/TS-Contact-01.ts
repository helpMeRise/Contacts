type User = {
    name: string,
    age: number,
    group: string,
};

type Admin = {
    name: string;
    age: number;
    role: string;
};

type Person = User | Admin;

const persons: Person[] = [
    {
        name: 'Иван Петров',
        age: 27,
        group: 'SEO-специалист',
    },
    {
        name: 'Марат Aляуддинов',
        age: 20,
        group: 'музыкант',
    },
    {
        name: 'Максим Лескин',
        age: 35,
        group: 'Преподаватель',
        role: 'Администратор',
    },
    {
        name: 'Александр Пойлов',
        age: 37,
        group: 'Куратор',
        role: 'Администратор',
    },
    {
        name: 'Максим Мельник',
        age: 29,
        group: 'Студент',
    },
];

const logPerson = (user: {
    name: string,
    age: number,
    role?: string,
}): void => {
    user.role && console.log(`${user.name}, ${user.age}, ${user.role}`);
    console.log(`${user.name}, ${user.age}`);

}

console.log('Users:');
persons.forEach(logPerson);
