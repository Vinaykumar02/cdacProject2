import { Optional } from "@angular/core";

export class AdoptionModel {
    constructor(
        @Optional() id: number,
        public name:string,
        public adhaarNumber:string,
        public age:Number,
        public phoneNumber:string,
        public emailId : string,
        public petitionSigned:boolean
    ){}
}
