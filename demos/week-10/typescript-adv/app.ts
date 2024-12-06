// types

const number:number = 42
const string:string = 'Hello world'
const myBool: boolean = true

// objects

const myObj: { name: string, office: string } = {
    office: 'Liverpool',
    name: 'Sam'
}

// I use type 90% of the time
// you can use them for any data type
type InfoType = {
    firstName: string,
    lastName: string,
    favNumber: number,
    pets: string[]
}


type AdminInfoType = {
    firstName: string,
    lastName: string,
    favNumber: number,
    pets: string[]
    adminNumber: number
}

const SamAdminRole: AdminInfoType = {
    firstName: 'Sam',
    lastName: "Louloudis",
    favNumber: 42,
    pets: ['Darcy', 'Charlie'],
    adminNumber: 4234
}


type myName = string

//  Array<string>

// interfaces

interface AnimalType {
    name: string,
    legs: number
}

interface Birds extends AnimalType {
    wingLength: number
}

const thePenguin: Birds = {
    wingLength: 53,
    name: 'The penguin',
    legs: 2
}



type CourseInfo = {
    // union types | 'templates'
    courseName: 'History' | 'Art' | 'Physics' | 'Web Dev',
    courseCode: number | string,
    headTeacher?: string
}


const historyCourse: CourseInfo = {
    courseName: 'History',
    courseCode: 42,
    headTeacher: 'Sam'
}

const modernArt: CourseInfo = {
    courseCode: 2001,
    headTeacher: 'Liz',
    courseName: "Art",
}




