import { IProduct } from "./IProduct";

export interface Order {
    id:number;
    products: IProduct[];
    date: string;
    status: string;
}

