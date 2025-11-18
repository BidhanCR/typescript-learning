// dynamically generalize

type GenericArray<T> = Array<T>;

// const friends:string[] = ["X", "Y", "Z"];
const friends: GenericArray<string> = ["X", "Y", "Z"];

// const rollNumbers:number[] = [4, 7, 11];
const rollNumbers: GenericArray<number> = [4, 7, 11];

// const isEligibleList:boolean[] = [true, false, true]
const isEligibleList: GenericArray<boolean> = [true, false, true];

const userList: GenericArray<{ name: string; age: number }> = [
  {
    name: "X",
    age: 554,
  },
  {
    name: "Y",
    age: 635,
  },
];

type Coordinates<X, Y> = [X, Y];

const Coordinates1: Coordinates<number, number> = [20, 30];
const Coordinate2: Coordinates<string, string> = ["20", " 30"];
