let greet = function(){
    console.log("Hello");
}

greet();

let a = [1,2,3,4];

//multiply array by 2 and assign it to new variable.

let newarray = a.map((num)=>num+2);

console.log(newarray);
console.log(a);

let fruits = [apple, banana, grapes];

newarray1 = fruits.splice(1,1);
  
console.log(newarray1);


let nums = [3, 15, 8, 22, 5]; 
let big = nums.filter((n) => n > 10); 
console.log(big); // [15, 22]


let nums = [10, 20, 30];  
let total = nums.reduce((acc, num) => acc + num, 0); console.log(total); // 60

let fruits = ['apple', 'mango', 'banana']; 
let result = fruits.map(f => f.toUpperCase()); console.log(fruits[0]);
console.log(result[0]);

let students = [ { name: 'priya' }, { name: 'ravi' } ]; 
let names = students.map(s => s.name.toUpperCase()); console.log(names); // ['PRIYA', 'RAVI']

let words = ['playwright', 'javascript'];
let joined = words.reduce((result, ele) => result + ' ' + ele);
console.log(joined);

let users = [
{ name: 'priyanka', active: true },
{ name: 'rahul', active: false }
];
let activeusers = users.filter((user) => user.active === true);
console.log(activeusers); 


let student = {

    name :'Priya',
    Age:25,
    roomNo:250
};

//const {name ,Age} = student;
//const{name:longername, schoolname = 'ABCSchool'}= student; // new key and its value can be added during restructuring. but , 
// we cannot modify the keys that are already declared and initialzed
//console.log(longername,name,schoolname);

function priyanka({name,roomNo, Age})
{

    console.log(name);
    console.log(Age);
    console.log(roomNo);
}
priyanka(student);


let person = {name:'Tom'}; let {salary} = person; console.log(salary); 

let person = {name:'Tom', age:30}; let {age} = person; console.log(age); 

let person = {name:'Tom', age:30}; let {name} = person; console.log(name); 

let person = {name:'Tom'};let {age=25} = person; console.log(age); 

let user = {name:'Priya'};  
function show({name}) { console.log(name); }  
show(user);

let obj = {name:'John'}; 
let {name:username} = obj;
console.log(username); 

let obj = {name:'Ram', ages:10};  
console.log(obj.age);

let product = {item:'Laptop'}; 
function show(p) { console.log(p.item); } show(product); 

let places = {name:'USA'};function test({name}) { console.log(name); } test(places); 

let arr = [{name:'A'}, {name:'B'}]; arr.forEach(function(obj) { console.log(obj.name); }); 

let person = {name:'Tom', age:20}; let {age,name} = person
console.log(name);
console.log(age);

let obj = {name:'Priya'}; let {name:newName} = obj 
console.log(newName);

let person = {age:10}; let {age= 10} = person 
console.log(age);

let promise = new Promise ((resolve ,reject) => {

let paymentsuccess = true;

if (paymentsuccess)
{

    resolve("payment is successfull");
}
else{
    reject("payment failed");
}

});

promise.then (pass => console.log(pass)).catch(fail=>console.log(fail)).finally(()=> {
    console.log("transaction comlpleted");

});

//..................

let promise1 = new Promise((resolve,reject)=> {

setTimeout(()=>

    {

    resolve("data loaded after timeout");

    },20);

});

promise1.then(pass=> console.log(pass)).catch(fail=>console.log(fail)).finally(()=>{
    console.log("test executed succesfully")
})

//...........

function checkLogin(username, password) {
return new Promise((resolve, reject) => {
setTimeout(() => {
if (username === "admin" && password === "1234") {
resolve("Login successful!");
} else {
reject("Invalid username or password");
}
},1000);
});
}
checkLogin("admin", "123").then((message) => console.log(message)).catch((error) => console.log(error)).finally(()=>
{
    console.log("login test successful")
});

let users = [
{ name: 'priyanka', active: true },
{ name: 'rahul', active: false }
];
let activeusers = users.filter((user) => user.active === true);
console.log(activeusers); // 'priyanka'

let numbers = [1, 2, 3];
let total = numbers.reduce((x, y) => x * y, 20);
console.log(total);

let names = ['playwright', 'javascript'];
let newnames = names.reduce((result, ele) => result + ele);
console.log(newnames);
// Step 1: result='playwright', ele='javascript'
// → 'playwright' + ' ' + 'javascript' = 'playwright javascript'


function trainer(callback){
console.log('hey');
callback();
}
trainer(()=>{
console.log('trainer');
});

let p = new Promsie((resolve,reject)=> {
    
    let num = 24;
    
    if (num=>num%2===0){
        resolve("number is even");
    }
    else{
        reject("number is odd");
    }
});

p.then(result=> console.log(result)).catch((fail)=> console.log(fail));



function boilwater () {

    return new Promise ((resolve,reject)=> 
    
    {
        resolve("water is boiled");
    });

}

 async function tea () {

    console.log("put kettle");
const water = await boilwater();
console.log(water);

}


tea();

async function tea() {

    await console.log("water");
}

tea();


const p = new Promise ((resolve,reject)=> 
    
    {
        resolve("water is boiled");
    });

    console.log(p);

