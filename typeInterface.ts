type User = {
  name: string;
  age: number;
};

type Role = {
  role: "admin" | "user";
};

interface IUser {
  name: string;
  age: number;
}

type UserWithRole = User & Role;

interface IUserWithRole extends IUser {
  role: "admin" | "user";
}

const user1: IUserWithRole = {
  name: "Bidhan",
  age: 100,
  role: "admin",
};

const user2: IUser = {
  name: "Roy",
  age: 1254,
};

type IsAdmin = boolean;

const isAdmin: IsAdmin = false;

// function

type Add = (num1: number, num2: number) => number;

interface IAdd {
  (num1: number, num2: number): number;
}

const add: IAdd = (num1, num2) => num1 + num2;

add(2, 5);

type Friends = string[];

interface IFreinds {
  [index: number]: string;
}

const friends: IFreinds = ["A", "B", "C"];
