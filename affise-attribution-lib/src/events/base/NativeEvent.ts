import {AffiseEvent} from "./AffiseEvent";
import {AffisePropertyBuilder} from "../property/AffisePropertyBuilder";
import {AffiseProperty} from "../property/AffiseProperty";
import type {AffiseCustomEventProps} from "./AffiseCustomEventProps";

export class NativeEvent extends AffiseEvent {

    constructor({eventName, userData, timeStampMillis}: AffiseCustomEventProps) {
        super(eventName, userData);
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
