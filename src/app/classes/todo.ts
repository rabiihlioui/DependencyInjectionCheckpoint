export class Todo {
    id: number;
    name: string;
    email: string;
    address: string;
    phone: number;
    done: boolean;
    constructor( values: Object = {} ) { 
          Object.assign(this, values);
       }
}
