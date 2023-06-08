interface UserInterface {
  name: string;
  age: number;
  color: string;
}

const user = (user: UserInterface): string => {
  return user.name;
};

console.log(user({ name: 'Jp', age: 27, color: 'Green' }));
