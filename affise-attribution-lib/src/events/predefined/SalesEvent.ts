import {NativeEvent} from '../base/NativeEvent';
import {EventName} from "../EventName";
import type {AffiseEventProps} from "../base/AffiseEventProps";

export class SalesEvent extends NativeEvent {

    constructor(props?: AffiseEventProps) {
        super({...props, eventName: EventName.SALES});
    }
}
