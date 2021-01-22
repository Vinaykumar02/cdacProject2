import { Optional } from "@angular/core";

export class Pet {

    constructor(
        @Optional() public id: number,
        public animal: string,
        // @Optional() public breed: string,
        public gender: string,
        public city: string,
        public details: string,
        public adopted: boolean,
        public image: any,
        public imageContentType: string
        ) {}

}
