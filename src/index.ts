//Basic types
let id: number = 5

let company: string = "Numeric Sins"
let isPublished: boolean = true;

// any is a type that can be used to assign value to it of any type. first we assigned a string and then a boolean
let x: any ="Setting X to strings"
// x = true

//initializing a variable
let age: number

//array
let ids: number[] = [4,8,12,23,13]
let arr: any[] = [1, "abc", true]

//tuple
let person: [number,string,boolean] = [1, 'sohail', true]

//tuple Array
let employee: [number, string][]

employee=[
    [1, "Worker1"],
    [2, 'Worker2'],
    [3, 'Worker3']
]


//union
let uniID: string | number
uniID = 4
uniID = "Sohail"

//Enum
enum Direction1{
    up,
    down,
    left=4,
    right
}
enum Direction2{
    up="up",
    down='down',
    left='',
    right='right'
}



//Objects


console.log("ID : ",id)
console.log("Company : ",company)
console.log("x : ",x)
console.log("arr : ",arr)
console.log("person : ",person)
console.log("Employee Tuple : ",employee)
console.log("Enum : ",Direction1.up, Direction1.down, Direction1.right, Direction1)
console.log("Enum 2: ",Direction2.up, Direction2.down, Direction2.right, Direction2)