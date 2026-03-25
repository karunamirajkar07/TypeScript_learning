let s1: string | number = ""
s1 = 12

let array1 : (string | number | boolean )[]  =[]

array1.push("true" ,12 , true)

type User ={
    name: string,
    age: number,
    city?: string,
}

let user : User = {
    name: "karuan",
    age : 12,
    
}

function count (num: number , num1 : number, total ?: number ) {
    return num + num1
}

count(1 , 2);

type emp= {
    name: string,
    post: string,
    salaryCTC: number,
    joining_date : Date,
    increment_date ?: Date,
    expectation : number,
}

function employee1( emp : emp){
    return {
       emp    
    }
}

employee1({
    name: "karuna",
    post: "Developer",
    salaryCTC: 600000,
    joining_date: new Date(),
    expectation: 700000,
  });

interface IAuthor <T>{
    name: string,
    age : number,
    extra : T
}

function above (): IAuthor<string>{
    return{
       name : "karuna",
        age : 12,
        extra : "true"
    }
}