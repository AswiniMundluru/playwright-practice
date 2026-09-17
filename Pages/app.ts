let studentName: string = "Alekhya";
let age: number = 25;
function greet(name: string): string {
return `Hello, ${name}! Welcome to TypeScript.`;
}
console.log(greet(studentName));


function hello(name: string): string {
  return `Hi, ${name}`;
}
console.log(hello('Neha'));


let status: string | number;
status = 42;
console.log(status);

function sayHello(name: string = "Friend"): void {
  console.log("Hello " + name);
}
 
sayHello();
sayHello("Ravi");

function say(name: string = "Guest"): void {
  console.log(name);
}
say();

function sumOfNumber(...numbers: number[]): number {
  let sum = 0;
  for (let num of numbers) {
    sum = sum + num;
  }
  return sum;
} 
console.log(sumOfNumber(5));
console.log(sumOfNumber(1, 2, 3, 4, 5));


function add(a: number, b: number) {
return a + b;
}
console.log(add(10, 20)); // 30

function enrollStudent(name: string, batch?: string): string {

return batch ? `${name} enrolled in ${batch}` : `${name} enrolled, batch not
assigned yet`;
}
console.log(enrollStudent('Sravya')); // batch not assigned yet
console.log(enrollStudent('Sravya', 'Morning')); // batch is Morning