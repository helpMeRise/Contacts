interface User {
  type: 'user',
  name: string,
  age: number,
  group: string,
};

interface Admin {
  type: 'admin',
  name: string,
  age: number,
  role: string;
};


type Person = User | Admin;

const persons: Person[] = [
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

const isAdmin = (person: Person): person is Admin => person.type === 'admin';
const isUser = (person: Person): person is User => person.type === 'user';

const logPerson = (person: Person) => {
  let information: string = '';
  
  if (isAdmin(person)) {
    information = person.role;
  }
  
  if (isUser(person)) {
    information = person.group;
  }
  
  console.log(` - ${person.name}, ${person.age}, ${information}`);
}

const isUserKey = (user: User, key: string): key is keyof User => key in user;
const isPersonKey = (user: Person, key: string): key is keyof Person => key in user;

const filterPersons = (persons: Person[], criteria: Partial<Person>): Person[] =>
persons.filter((user) => {
    const criteriaKeys = Object.keys(criteria);
    return criteriaKeys.every((fieldName) => {
      if (isPersonKey(user, fieldName)) {
        return user[fieldName] === criteria[fieldName]
      }
      return false;
    });
  });


console.log('Persons of age 27:');

filterPersons(
  persons,
  {
    age: 27
  }
).forEach(logPerson);