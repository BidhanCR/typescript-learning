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

console.log(user1);
