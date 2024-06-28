function hello(myName: string): string {
  return "Hello " + myName;
}

const greet = hello("Rahul");

console.log(greet);

//
//

function runAfter1s(fn: () => void) {
  setTimeout(() => {
    fn();
  }, 1000);
}

runAfter1s(() => {
  console.log("Hii");
});

// Interfaces
// interface User {
//   username: string;
//   email?: string; //if have
//   age: number;
// }

// Types

type User2 = {
  username: string;
  email?: string; //if have
  age: number;
};

// Other things that types let us do

// Unions

type args = number | string;

function greet1(id: args) {}

// // //

type employee = {
  name: string;
  startDate: Date;
};

interface manager {
  name: string;
  department: string;
}

type techLead = employee & manager;

const t: techLead = {
  name: "Rahul",
  startDate: new Date(),
  department: "web",
};

// Arrays

type numberArr = number[];

function returnMax(arr: numberArr) {
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

returnMax([1, 2, 3]);

// enums   (set of named constants)

// type Direction = "up" | "down" | "left" | "right"    // it is not an enum
// or better

enum Direction {
  up,
  down,
  left,
  right,
}

function dosomething(keyPressed: Direction) {
  if (keyPressed == Direction.up) {
    // do Something
  }
}

dosomething(Direction.up);

// Generics

// This is the problem
// function identity1(arg:string | number) {
//     return arg;
// }

// const value = identity1("hello")              // this value doesn't have a specified type

// this is the solution

function identity2<T>(arg: T) {
  return arg;
}

// let output1 = identity2<string>("Hello")
// let output3 = identity2<number>(12)
// it can automatic figure out the type of output

let output1 = identity2("Hello");
let output2 = identity2(12);

output1.toUpperCase();

//
// also can be complex like

interface User3 {
  name: string;
}
let output3 = identity2<User3>({ name: "Rahul" });

// Pick

interface User {
  name: string;
  email: string;
  id: string;
  age: number;
  password: string;
}

type updateProps = Pick<User, "name" | "age" | "password">;

// Partial

type updatePropsOptional = Partial<updateProps>;

function updateUserInfo(props: updatePropsOptional) {
  // code here
}

updateUserInfo({ name: "Rahul" });

// readonly

type User4 = {
  userName: string;
  age: number;
};

const user: Readonly<User4> = {
  userName: "Rahul",
  age: 20,
};
//  user.age = 30        // it will not work



// Records

// we can use simple types like

type Contacts = {
  [key: string]: number;
};

// or we can use records like
type Contacts2 = Record<string, number>;

const user2: Contacts2 = {
  adsdds: 458,
};

// Maps
const User5 = new Map<string, number>()
User5.set("abc", 5754);

User5.get("abc")

// 


// Exclude 
type event = "click" | "scroll" | "mouseMove"

type excludeEvent = Exclude<event, "scroll">   //  "click" | "mouseMove"

function handleEvent(eventType:excludeEvent){
  console.log(`Handling event ${eventType}`);  
}

handleEvent("mouseMove")  // ok
// handleEvent("scroll")  // not ok

