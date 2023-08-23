import {NativeEvent} from "../base/NativeEvent";
import {EventName} from "../EventName";

export class ListViewEvent extends NativeEvent {

    constructor({userData, timeStampMillis}: { userData?: string, timeStampMillis?: number } = {}) {
        super(EventName.LIST_VIEW, userData, timeStampMillis);
    }
}
