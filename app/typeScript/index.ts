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
