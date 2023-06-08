interface UserInterface {
  name: string;
  age: number;
  color: string;
}

class Person<T> {
  constructor(public data: T) {}
}

const data = {
  age: 1,
  name: 'Jose',
  color: 'red',
};
const pe = new Person<UserInterface>(data);

console.log(pe.data, typeof pe.data);
