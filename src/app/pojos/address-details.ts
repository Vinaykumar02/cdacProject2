import { Optional } from "@angular/core";

export class AddressDetails {
    constructor(
        @Optional() id: number,
        public flatNumber:string,
        public building:string,
        public area:string,
        public city:string,
        public district:string,
        public state:string,
        public pinCode:string

    ){

    }
}
