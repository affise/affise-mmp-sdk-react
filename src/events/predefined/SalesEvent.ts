import {NativeEvent} from '../base/NativeEvent';
import {EventName} from "../EventName";

export class SalesEvent extends NativeEvent {

    constructor({userData, timeStampMillis}: { userData?: string, timeStampMillis?: number } = {}) {
        super(EventName.SALES, userData, timeStampMillis);
    }
}
