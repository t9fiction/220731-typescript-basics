//Basic types
let id: number = 5

let company: string = "Numeric Sins"
let isPublished: boolean = true;

// any is a type that can be used to assign value to it of any type. first we assigned a string and then a boolean
let x: any = "Setting X to strings"
// x = true

//initializing a variable
let age: number

//array
let ids: number[] = [4, 8, 12, 23, 13]
let arr: any[] = [1, "abc", true]

//tuple
let person: [number, string, boolean] = [1, 'sohail', true]

//tuple Array
let employee: [number, string][]

employee = [
    [1, "Worker1"],
    [2, 'Worker2'],
    [3, 'Worker3']
]


//union
let uniID: string | number
uniID = 4
uniID = "Sohail"

//Enum
enum Direction1 {
    up,
    down,
    left = 4,
    right
}
enum Direction2 {
    up = "up",
    down = 'down',
    left = '',
    right = 'right'
}



//Objects
const user: {
    id: number,
    name: string
} = {
    id: 1,
    name: "Sohail"
}

type User = {
    id: number,
    name: string
}
const user1: User = {
    id: 1,
    name: "Ishaque"
}

//Type assertion
let cid: any = 1
let cid2: any = 1
let customerId = <number>cid //first method
let customerId2 = cid as number //second method

//Functions 

function addNum(x: number, y: number): number { //Defining number of input types x and y and then  return type as number also
    return x + y
}
function logFun(message: number | string): void { // The function returns nothing so the void is used
    console.log(message)
}


//Interface, same as object, almost, Interfaces can't b used with unions and primitives
interface UserInterface {
    id: number,
    name: string,
    age?: number //with ?, it becomes option, can be provided or not.
}
const intUser: UserInterface = {
    id: 1,
    name: "Ishaque"
}

// Interface with Functions
interface mathFunction {
    (num1: number, num2: number): number
}

const addusingInterface: mathFunction = (x: number, y: number): number => x + y
const minususingInterface: mathFunction = (x: number, y: number): number => x - y


//Classes 

class Person {
    id: number
    name: string

    constructor(id: number, name: string) {
        this.id = id
        this.name = name
        console.log(id, " : ", name)
    }
}

const brad = new Person(1, "ali")

//Generics
function getArray<T>(items: T[]):T[]{
    return new Array().concat(items)
}

let numArray = getArray<number>([1,2,3,4,5])
let stringArray = getArray<string>(['abd','c','d'])
numArray.push(1)
stringArray.push('1')

//========================================
console.log("ID : ", id)
console.log("Company : ", company)
console.log("x : ", x)
console.log("arr : ", arr)
console.log("person : ", person)
console.log("Employee Tuple : ", employee)
console.log("Enum : ", Direction1.up, Direction1.down, Direction1.right, Direction1)
console.log("Enum 2: ", Direction2.up, Direction2.down, Direction2.right, Direction2)
console.log("Object : User => ", user)
console.log("Object : User1 => ", user1)
console.log("Function of add of two nums : ", addNum(3, 4))
console.log("Log function", logFun(1))
console.log("brad Class : ", brad)