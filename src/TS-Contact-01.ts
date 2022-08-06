type User = unknown;

const persons: unknown[] = [
    {
        name: 'Иван Петров',
        age: 27,
        group: 'SEO-специалист',
    },
    {
        name: 'Марат Aляуддинов',
        age: 20,
        group: 'музыкант',
    }
];

const logPerson = (user: unknown) => {
    console.log(`${user.name}, ${user.age}`);
}

console.log('Users:');
persons.forEach(logPerson);
