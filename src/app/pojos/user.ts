import { Optional } from "@angular/core";

export class User{
    constructor(
        @Optional() public id: number,
        public userName : string,
        public emailID : string,
        public password : string
    ){}
}