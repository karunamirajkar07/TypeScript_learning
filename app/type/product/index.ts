export interface ProductAPIList {
    id: string;
    title: string,
    category: string,
    price: number,
    mrp: number,
    imageURL: string,
    brand: string,
    colour: string,
    size: number,
    description: string,
    quantity: number,
    type: string

}

export interface ProductAPIRequet{
    page:number,
    search:string,
    limit:number
}

export interface ProductAPIPostRequest{
    title: string,
    category: string,
    price: number,
    mrp: number,
    brand: string,
    colour: string,
    size: number,
    description: string,
    quantity: number,
    type: string
}


