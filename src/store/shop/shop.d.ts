declare interface ShopState {
    cart:Array<ProductCart>;
    total:number;
} 

declare interface Product{
    id:number;
    idCategory:number;
    name:string;
    description:string;
    price:number;
    image:string;
}

declare interface ProductCart {
    id:number;
    idCategory:number;
    name:string;
    description:string;
    price:number;
    image:string;
    counter:number;
}

declare interface ElementList {
    type:string;
    price:number;
    counter:number;
    id:number;
}

declare interface RemoveElementList {
    id:number;
    price:number;
}