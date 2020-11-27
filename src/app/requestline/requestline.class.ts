import { Request } from '../request/request.class';
import { Product } from '../product/product.class';

export class RequestLine{

    id: number = 0;

    request: Request = null;
    product: Product = null;

    // both of these are foreign keys but not in Java
    // requestId: number = 0;
    // productId: number = 0;

    quantity: number = 1;

    constructor(){}

}