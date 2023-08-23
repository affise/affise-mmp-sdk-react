import {NativeEvent} from "../base/NativeEvent";
import {EventName} from "../EventName";

export class ViewItemsEvent extends NativeEvent {

    constructor({userData, timeStampMillis}: { userData?: string, timeStampMillis?: number } = {}) {
        super(EventName.VIEW_ITEMS, userData, timeStampMillis);
    }
}
