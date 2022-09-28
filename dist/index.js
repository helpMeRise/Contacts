"use strict";
;
;
const persons = [
    {
        type: 'admin',
        name: 'Иван Петров',
        age: 27,
        role: 'Administrator',
    },
    {
        type: 'user',
        name: 'Марат Aляуддинов',
        age: 20,
        group: 'музыкант',
    },
    {
        type: 'user',
        name: 'Екатерина Попова',
        age: 24,
        group: 'дизайнер сайтов'
    },
    {
        type: 'admin',
        name: 'Аркадий Паравозов',
        age: 55,
        role: 'Системный администратор'
    },
    {
        type: 'user',
        name: 'Даня Поперечный',
        age: 28,
        group: 'Комик'
    },
    {
        type: 'admin',
        name: 'Олег',
        age: 44,
        role: 'Модератор'
    }
];
const isAdmin = (person) => person.type === 'admin';
const isUser = (person) => person.type === 'user';
const logPerson = (person) => {
    let information = '';
    if (isAdmin(person)) {
        information = person.role;
    }
    if (isUser(person)) {
        information = person.group;
    }
    console.log(` - ${person.name}, ${person.age}, ${information}`);
};
const isUserKey = (user, key) => key in user;
const isPersonKey = (user, key) => key in user;
const filterPersons = (persons, criteria) => persons.filter((user) => {
    const criteriaKeys = Object.keys(criteria);
    return criteriaKeys.every((fieldName) => {
        if (isPersonKey(user, fieldName)) {
            return user[fieldName] === criteria[fieldName];
        }
        return false;
    });
});
console.log('Persons of age 24:');
filterPersons(persons, {
    age: 27
}).forEach(logPerson);
