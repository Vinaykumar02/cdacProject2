import { Optional } from "@angular/core";

export class Pet {

    constructor(
        @Optional() public id: number,
        public animal: string,
        public breed: string,
        public gender: string,
        public isdopted: boolean,
        public location: string,
        public image: any,
        public details: string
        ) {}

}
