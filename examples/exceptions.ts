export class InternalError extends Error {
  constructor(
    public message: string,
    protected code: number = 500,
    protected description?: string
  ) {
    super(message);
    this.name = this.constructor.name;
    Error.captureStackTrace(this, this.constructor);
  }
}

export class Teste extends InternalError {}

const fun1 = () => {
  throw new Teste('testea');
};
const fun2 = () => {
  fun3();
};
const fun3 = () => {};

fun1();
