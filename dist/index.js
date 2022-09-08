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
const filterUsers = (persons, criteria) => persons.filter(isUser).filter((user) => {
    const criteriaKeys = Object.keys(criteria);
    return criteriaKeys.every((fieldName) => {
        if (isUserKey(user, fieldName)) {
            return user[fieldName] === criteria[fieldName];
        }
        return false;
    });
});
console.log('Users of age 24:');
filterUsers(persons, {
    age: 24
}).forEach(logPerson);
