import { User } from '../user/user.class';

export class Request {

    id: number = 0;
    user: User = null;
    description: string = "";
    justification: string = "";
    dateNeeded: string = "";
    deliveryMode: string = "";
    status: string = "";
    total: number = 0;
    submittedDate: string = "";
    reasonForRejection: string = "";

    constructor() {}
    
}