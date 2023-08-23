import {NativeEvent} from "../base/NativeEvent";
import {EventName} from "../EventName";

export class ContentItemsViewEvent extends NativeEvent {

    constructor({userData, timeStampMillis}: { userData?: string, timeStampMillis?: number } = {}) {
        super(EventName.CONTENT_ITEMS_VIEW, userData, timeStampMillis);
    }
}
