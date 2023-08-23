import {AffiseEvent} from "./AffiseEvent";
import {AffisePropertyBuilder} from "../property/AffisePropertyBuilder";
import {AffiseProperty} from "../property/AffiseProperty";

export class NativeEvent extends AffiseEvent {

    constructor(name: string, userData?: string, timeStampMillis?: number) {
        super(name, userData);
        this.category = 'react';

        this.serialize = this.serializeBuilder()
            .add(AffiseProperty.TIMESTAMP, timeStampMillis || Date.now())
            .build();
    }

    serializeBuilder(): AffisePropertyBuilder {
        return new AffisePropertyBuilder()
            .init(this.name);
    }
}
