interface UserInterface {
  name: string;
  age: number;
  color: string;
}

const userFn = (user: UserInterface): string => {
  return user.name;
};

console.log(userFn({ name: 'Jp', age: 27, color: 'Green' }));

// FUNCTION

function person<T>(data: T) {
  return data;
}

const p = person<number>(1);
const p2 = person<string>('Ola');

console.log(p);
console.log(p2);

function personExtends<T extends number>(data: T) {
  return data;
}

console.log(personExtends<number>(1));
