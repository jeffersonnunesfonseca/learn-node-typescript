enum Types {
  ADMIN = 1,
  USER = 2,
}

const id: number = 1;
console.log(Types, typeof Types, Types[id]);

switch (id) {
  case Types.ADMIN:
    console.log('1');
    break;
}
