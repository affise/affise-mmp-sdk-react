import {AffiseEvent} from "./AffiseEvent";

export class NativeEvent extends AffiseEvent {

    constructor(name: string) {
        super(name);
        this.category = 'react';
    }
}
