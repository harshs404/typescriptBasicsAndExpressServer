let marks = 50;
console.log(marks)
marks =100
console.log(marks)
// var username="harsh";
// console.log(username);

//basic types
let username: string = "harsh";
console.log(username)
let userid: number;
userid = 23;
console.log(userid);

//arrays
let subjects:string[];
subjects=["History","civics"];
console.log(subjects[1]);
subjects.push("geo");
console.log(subjects)
subjects.pop();
console.log(subjects)

//tuples(similar to sets in dart)
let veggies=[0,false,"chilly"] // this is a dynamic item containing tupple

//we can also generate tuples with specific types....
let fruits : [number,string]
fruits=[57,"apple"]
console.log(fruits)

// Array of tuple
let listOfSabzi :[number,string][];
listOfSabzi=[
    [1,"Kadhai paneer"],
    [2,"dum aloo"],
];
console.log(listOfSabzi);


//Maps
let slots = new Map();
slots.set("timings","4 PM");
slots.set("patients","Harsh");
console.log(slots.get("timings"))
// slots.set stores the values of timings and patients in form of key value pair
//to check if the vaalue is stored inside map or not

console.log(slots.has("timings"));

// Map iteration
// iterating keys
for(let values of slots.keys()){
    console.log(values)
}
//iterating values
for(let values of slots.values()){
    console.log(values)
}

//union of two different datatypes
let decideMyType: boolean|string|number;
decideMyType =55;
decideMyType="55";
decideMyType=false;
//in above example if we remove number....then...decideMyType =55; will give an error

let car: any
car = 55;
car = false;
car = ['acnjkncd'];
// any can be used to declare any type of data in a variable, but it makes debugging a nightmare, so avoid using any
console.log()

// we can also make custom types....
type userUID=string|number;
let user1: userUID;
user1=45
console.log(user1)
//now user1 can be of type either string or number

//if we simply write myHobbies and start assigning it different datatypes, then we'll see that it will be assigned as an Array of union of various data structures
let myHobbies = ["SLEEP","code",404,false]
//on hovering ablove statement it shows... myHobbies: (string | number | boolean)[]

//38 min...command for starting to get output next time after re opening... npm run dev  

//functions in type script...
function sayMyName(name:string){
    console.log(name);
}
sayMyName("Harsh");

function detectMyName(x:string){
    if(x=="Harsh"){
        console.log("user identified");
    }else{
        console.log("unknown user");
    }
}
detectMyName("Harsh");
detectMyName("Ayush");

//Normal types
function sumOfNumbers(x:number,y:number){
    return x+y
}

console.log(sumOfNumbers(5,9))

// we can also decide the explicit type of function, the type of return value it gives

function sumOfNumbers1(x:number,y:number): number{
    return x+y
}
console.log(sumOfNumbers1(5,9))


function callMe( n:string,age?: number){
    return n+" was called by "+age;
}
console.log(callMe("Harsh",21));

//class
class Car{
    model:string;
    engine:string;
    constructor(x:string,y:string){
        this.model=x;
        this.engine=y;
    }

    carData(){
        return `model ${this.model} has ${this.engine}`;
    }
}

const car1=new Car("Audi","nhy");
console.log(car1.carData());

//interfaces

interface DogData{
    name: string;
    breed: string;
    age: number;
}
const dog1: DogData={
    name:"Mau",
    breed:"Golden retriever",
    age:5 ,
}
console.log(dog1.breed);

interface UserData{
    username:string;
    useremail:string;
}
const user2:UserData={
    username:"Harsh",
    useremail:"harsh@gmail.com",
}

//classes provide custom data, interfaces provide only members

//deifference btw nodeJS and ExpressJS:
//NODE JS is a javascript runtime environment, in this we can write our different type of code, server code,data base code or connect them...it is not a backend...it is mainly used for connecting....express JS is a server setup, in this you don't need to write boilerplate code, like we write in NodeJS code for maintainig our server